import * as THREE from "three";
import { FontLoader } from "three/addons";
import { TextGeometry } from "three/addons";
import { OrbitControls } from "three/addons";
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





    /*Texture Loader*/
    const textureLoader = new THREE.TextureLoader().setPath("./assets/textures/"); // Base-path 잡기
    const textTexture = textureLoader.load("holographic.jpeg");
    // const textTexture = textureLoader.load("gradient.jpg");
    textMaterial.map = textTexture;


    // const planeGeomtry = new THREE.PlaneGeometry(2000, 2000);
    // const planeMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
    //
    // const plane = new THREE.Mesh(planeGeomtry, planeMaterial);
    // plane.position.z = -10;
    // scene.add(plane);


    /*Light - AmbientLight*/
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.2);
    scene.add(ambientLight);

    /*Light - PointLight*/
    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // pointLight.position.set(3, 0, 2);
    // scene.add(pointLight);


    /*Light - SpotLight*/
    const spotlight = new THREE.SpotLight(
        0xffffff, // 색상
        2.5, // 빛의 강도
        30, //빛이 닺는 거리
        Math.PI * 0.15, // 퍼지는 각도
        0.2, // 빛이 감쇠하는 정도
        0.5, // 거리에 따라 빛이 어두워지는 양
    );
    spotlight.position.set(0, 0, 3);
    spotlight.target.position.set(0, 0, -3);
    scene.add(spotlight, spotlight.target);
    const spotlightHelper = new THREE.SpotLightHelper(spotlight);
    // scene.add(spotlightHelper);


    const gui = new GUI();
    const spotLightFolder = gui.addFolder("SpotLight"); // 하나로 관리
    spotLightFolder.add(spotlight, "angle").min(0).max(Math.PI * 0.2).step(0.01);
    spotLightFolder.add(spotlight.position, "z").min(1).max(10).step(0.01).name("position.z");
    spotLightFolder.add(spotlight, "distance").min(1).max(30).step(1);
    spotLightFolder.add(spotlight, "decay").min(0).max(10).step(0.1);
    spotLightFolder.add(spotlight, "penumbra").min(0).max(10).step(0.1); //


    const render = () => {
        renderer.render(scene, camera);
        spotlightHelper.update();
        requestAnimationFrame(render);
    };

    /*HandleResize*/
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera); // 새롭게 render 된 내용을 반영
    };

    render();
    window.addEventListener("resize", handleResize);


};