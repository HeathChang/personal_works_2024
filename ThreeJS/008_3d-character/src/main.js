import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

window.addEventListener("load", () => {
    init();
});


const init = async () => {

    const renderer = new THREE.WebGL1Renderer({
        antialias: true,
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;


    document.body.appendChild(renderer.domElement);
    const scene = new THREE.Scene();

    /* camera */
    const camera = new THREE.PerspectiveCamera(75,
        window.innerWidth / window.innerHeight,
        1,
        500,
    );
    camera.position.set(0, 5, 20);

    /* OrbitControls */
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 15;
    controls.maxDistance = 25;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 3;

    /* Progressive Bar Variables*/
    const progresssBar = document.querySelector("#progress-bar");
    const progressBarContainer = document.querySelector("#progress-bar-container");

    /*Loading Manager*/
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onProgress = (url, loaded, total) => {
        progresssBar.value = (loaded / total) * 100;
    };
    loadingManager.onLoad = () => {
        progressBarContainer.style.display = "none";
    };

    /*GLTF Loader*/

    const gltfLoader = new GLTFLoader(loadingManager);
    const gltf = await gltfLoader.loadAsync("./models/character.gltf");
    const model = gltf.scene;
    model.scale.set(0.1, 0.1, 0.1);
    model.traverse(obj => {
        if (obj.isPush) obj.castShadow = true;
    });
    scene.add(model);

    camera.lookAt(model.position);

    /* Plane Geometry*/
    const planeGeometry = new THREE.PlaneGeometry(10000, 10000, 10000);
    const planeMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -7.5;
    plane.receiveShadow = true;
    scene.add(plane);


    /*Light -hemiLight*/
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x333333);
    hemiLight.position.set(0, 20, 10);
    scene.add(hemiLight);

    /*Light - spotLight*/
    const spotLight = new THREE.SpotLight(0xffffff, 1.5, 30, Math.PI * 0.15, 0.5, 0.5);
    spotLight.position.set(0, 20, 0);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.radius = 8;
    scene.add(spotLight);


    let currentAction;


    /*Mixer*/
    const mixer = new THREE.AnimationMixer(model);
    const combatAnimations = gltf.animations.slice(0, 5);
    const dancingAnimations = gltf.animations.slice(5);
    const hasAnimation = gltf.animations.length !== 0;
    if (hasAnimation) {
        currentAction = mixer.clipAction(gltf.animations[0]);
        currentAction.play();
    }

    /* Button for combat animations */
    const buttons = document.querySelector(".actions");
    combatAnimations.forEach(animation => {
        const button = document.createElement("button");
        button.innerText = animation.name;
        button.addEventListener("click", () => {
            const previousAction = currentAction;
            currentAction = mixer.clipAction(animation);
            if (previousAction !== currentAction) {
                previousAction.fadeOut(0.5);
                currentAction.reset().fadeIn(0.5).play();
            }
        });
        buttons.appendChild(button);
    });


    /* Raycaster - 교차점 찾기 */
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();


    const clock = new THREE.Clock();

    const render = () => {
        const delta = clock.getDelta();
        mixer.update(delta);
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };


    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera); // 새롭게 render 된 내용을 반영
    };

    const handleFinished = () => {
        const previousAction = currentAction;
        currentAction = mixer.clipAction(combatAnimations[0])
        previousAction.fadeOut(0.5);
        currentAction.reset().fadeIn(0.5).play();
    }

    const handlePointerDown = event => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
        pointer.y = -(event.clientY / window.innerHeight - 0.5) * 2;
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        const object = intersects[0]?.object;
        if (object.name === "Ch46") {
            const previousAction = currentAction;
            const index = Math.round(Math.random() * (dancingAnimations.length - 1));
            currentAction = mixer.clipAction(dancingAnimations[index]);
            currentAction.loop = THREE.LoopOnce;
            currentAction.clapWhenFinished = true;

            if (previousAction !== currentAction) {
                previousAction.fadeOut(0.5);
                currentAction.reset().fadeIn(0.5).play();
            }

            mixer.addEventListener("finished", handleFinished)
        }
    };

    render();
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointerdown", handlePointerDown);

};