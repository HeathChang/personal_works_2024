import * as THREE from "three";
import { FontLoader } from "three/addons";
import { TextGeometry } from "three/addons";
import { OrbitControls } from "three/addons";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

import GUI from "lil-gui";


window.addEventListener("load", () => {
    init();
});


const init = async () => {
    const renderer = new THREE.WebGL1Renderer({
        antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 1, 5);

    /*Font Loader*/
    const fontLoader = new FontLoader();
    const jamsilFont = await fontLoader.loadAsync("./assets/fonts/The Jamsil 5 Bold_Regular.json");
    const textGeometry = new TextGeometry("안녕하세요. ", {
        font: jamsilFont,
        size: 0.5,
        height: 0.1,
        bevelSegments: 5, // 다듬기 > 경사면
        bevelSize: 0.02,
        bevelThickness: 0.02,
    });
    const textMaterial = new THREE.MeshPhongMaterial();
    const text = new THREE.Mesh(textGeometry, textMaterial);


    scene.add(text);

    // 1. BoundingBox를 사용한 중앙 정렬
    textGeometry.computeBoundingBox();
    textGeometry.translate(
        -(textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x) * 0.5,
        -(textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y) * 0.5,
        -(textGeometry.boundingBox.max.z - textGeometry.boundingBox.min.z) * 0.5,
    );
    // 2. TextGeometry.Center 를 사용한 중앙 정렬
    textGeometry.center();


    /*Texture Loader - 1*/
    const textureLoader = new THREE.TextureLoader().setPath("./assets/textures/"); // Base-path 잡기
    const textTexture = textureLoader.load("holographic.jpeg");
    // const textTexture = textureLoader.load("gradient.jpg");
    textMaterial.map = textTexture;


    const planeGeomtry = new THREE.PlaneGeometry(2000, 2000);
    const planeMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
    const plane = new THREE.Mesh(planeGeomtry, planeMaterial);
    plane.position.z = -10;
    scene.add(plane);


    /*Light - AmbientLight*/
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.2);
    scene.add(ambientLight);

    /* Light - PointLight*/
    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // pointLight.position.set(3, 0, 2);
    // scene.add(pointLight);

    /* Mouse Interaction : 커서의 움직임에 따라 spotLight도 움직임 */
    window.addEventListener("mousemove", (event) => {
        const x = ((event.clientX / window.innerWidth) - 0.5) * 5;
        const y = -((event.clientY / window.innerHeight) - 0.5) * 5; // ThreeJS 와 y 좌표 다름
        spotLight.target.position.set(x, y, -3);
    });

    /*Light - SpotLight*/
    const spotLight = new THREE.SpotLight(
        0xffffff, // 색상
        2.5, // 빛의 강도
        30, //빛이 닺는 거리
        Math.PI * 0.15, // 퍼지는 각도
        0.2, // 빛이 감쇠하는 정도
        0.5, // 거리에 따라 빛이 어두워지는 양
    );
    spotLight.position.set(0, 0, 3);
    spotLight.target.position.set(0, 0, -3);
    scene.add(spotLight, spotLight.target);

    /*spotLightHelper*/
    // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(spotLightHelper);


    /*Texture Loader - 2: Spot Light*/
    const spotLightTexture = textureLoader.load("gradient.jpg");
    spotLight.map = spotLightTexture;




    /*Shadow*/
    renderer.shadowMap.enabled = true; // shadow 켜주기
    text.castShadow = true;
    plane.receiveShadow = true;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;


    /* EffectComposer : 후처리 */
    let composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass)

    let unrealBloomPass = new UnrealBloomPass({
        strength: 0, // 블룸 효과의 강도
        radius: 0, // 블룸 효과의 반지름
        threshold: 0 // 블룸 효과의 임계값
    });
    composer.addPass(unrealBloomPass)


    /*GUI*/
    const gui = new GUI();
    const spotLightFolder = gui.addFolder("SpotLight"); // 하나로 관리
    spotLightFolder.add(spotLight, "angle").min(0).max(Math.PI * 0.2).step(0.01);
    spotLightFolder.add(spotLight.position, "z").min(1).max(10).step(0.01).name("position.z");
    spotLightFolder.add(spotLight, "distance").min(1).max(30).step(1);
    spotLightFolder.add(spotLight, "decay").min(0).max(10).step(0.1);
    spotLightFolder.add(spotLight, "penumbra").min(0).max(10).step(0.1); //
    spotLightFolder.add(spotLight.shadow, "radius").min(1).max(20).step(0.1).name("shadow radius"); //


    const unrealBloomPassFolder = gui.addFolder("UnrealBloomPass");
    unrealBloomPassFolder.add(unrealBloomPass, "strength").min(0).max(3).step(0.01);
    // unrealBloomPassFolder.add(unrealBloomPass, "radius").min(0).max(1).step(0.01);
    // unrealBloomPassFolder.add(unrealBloomPass, "threshold").min(0).max(3).step(0.01);


    const render = () => {
        // renderer.render(scene, camera);
        requestAnimationFrame(render);
        composer.render();

        // spotLightHelper.update();

    };

    /*HandleResize > browser 크기 변경될때 */
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera); // 새롭게 render 된 내용을 반영
    };

    render();
    window.addEventListener("resize", handleResize);


};