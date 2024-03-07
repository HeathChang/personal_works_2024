import * as THREE from "three";
import { FontLoader } from "three/addons";
import { TextGeometry } from "three/addons";
import { OrbitControls } from "three/addons";


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
    camera.position.z = 5;

    /*Font Loader*/
    const fontLoader = new FontLoader();
    const jamsilFont = await fontLoader.loadAsync("./assets/fonts/The Jamsil 5 Bold_Regular.json");
    const textGeometry = new TextGeometry("안녕하세요. ", {
        font: jamsilFont,
        size: 0.5,
        height: 0.1,
    });

    const textMaterial = new THREE.MeshPhongMaterial({color: 0x00c896});
    const text = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(text);

    // SECTION: LIGHT
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5, 0xffffff); // 빛의 시작점, 이 점을 기운주이면 조커주
    pointLight.position.set(3, 0, 2);
    scene.add(ambientLight);
    scene.add(pointLight, pointLightHelper);

    const render = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera); // 새롭게 render 된 내용을 반영
    };

    render();
    window.addEventListener("resize", handleResize);


};