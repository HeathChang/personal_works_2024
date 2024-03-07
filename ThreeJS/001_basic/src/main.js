import * as THREE from "three";
import { OrbitControls } from "three/addons";
import GUI from "lil-gui";
import { step } from "three/nodes";

window.addEventListener("load", () => {
    init();
});


const init = () => {
    const renderer = new THREE.WebGL1Renderer({
        // alpha: true // 투명
        antialias: true, // 계단 현상
    }); // Renderer : 영화관

    renderer.setSize(window.innerWidth, window.innerHeight); // 영화관(canvas) 크기

    document.body.appendChild(renderer.domElement);


    const scene = new THREE.Scene();
    const clock = new THREE.Clock();
    const camera = new THREE.PerspectiveCamera(75, //field-of-view(시야각) > 얼마큼의 시야각으로 물체를 바라볼지, 넓을 수록 더 많이 담김
        window.innerWidth / window.innerHeight, // 종횡비 >
        1, // near > 얼마나 가까이 보이는지
        500, // far > 얼마나 멀리 보이는지
    );
    camera.position.z = 5;

    const options = {
        color: 0x00ffff,
    };

    // MARK: Cube
    const cubeGeometry = new THREE.IcosahedronGeometry(1); //  built-in cubeGeometry clas
    const cubeMaterial = new THREE.MeshLambertMaterial({ // cubeMaterial applied to a 3D object, 조명 영향 O
        color: 0x00ffff, emissive: 0x111111,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // 3D object created by combining a geometry (shape) and a material (appearance)

    // MARK: SKELETON
    const skeletonGeometry = new THREE.IcosahedronGeometry(2);
    const skeletonMaterial = new THREE.MeshBasicMaterial({
        wireframe: true, transparent: true, opacity: 0.2, color: 0xaaaaaa,
    });
    const skeleton = new THREE.Mesh(skeletonGeometry, skeletonMaterial);

    // MARK: Controls >  control system for the camera
    const controls = new OrbitControls(camera, renderer.domElement);
    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);

    controls.enableDamping = true; // 바로 멈추지 않고, 약간 관성
    controls.dampingFactor = 0.1;

    controls.enableZoom = true; // 앞뒤 이동
    controls.maxDistance = 50; // 최대 zoom 거리 (클수록 물체와 거리가 멀어짐)
    controls.minDistance = 20; // 최소 zoom 거리 (클수록 물체와 거리가 멀어짐)
    controls.enablePen = true; // 좌우 이동

    // controls.maxPolarAngle = Math.PI / 2; // 수직 방향으로 돌릴 수 있는 카메라 최대거리
    // controls.minPolarAngle = Math.PI / 3; // 수직 방향으로 돌릴 수 있는 카메라 최소거리
    // controls.maxAzimuthAngle = Math.PI / 2; // 수평 방향으로 돌릴 수 있는 카메라 최대거리
    // controls.minAzimuthAngle = Math.PI / 3; // 수평 방향으로 돌릴 수 있는 카메라 최소거리


    const axisHelper = new THREE.AxesHelper(5);

    // MARK: 조명
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    scene.add(cube);
    scene.add(skeleton);
    scene.add(directionalLight);
    scene.add(axisHelper);


    // SECTION: Render

    // SECTION: 매 프레임마다 Animation 재생 함수
    const render = () => {


        const elaspedTime = clock.getElapsedTime();

        // MARK: 모든 환경에서 동일한 속도로 애니메이션 재생
        renderer.render(scene, camera);
        // controls.update();
        requestAnimationFrame(render); //  schedule a repaint of the window for the next animation frame.
    };


    // SECTION: 창크기에 따라 renderer 사이즈 변경, 이 때 카메라의 종횡비도 같이 조절돠기에, 카메라 크기도 업데이트 필요.
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera); // 새롭게 render 된 내용을 반영
        // controls.update();
    };

    render();
    window.addEventListener("resize", handleResize);

    const gui = new GUI();
    gui
        .add(cube.position, "y")
        .min(-3)
        .max(3)
        .step(0.1);

    gui
        .add(cube, "visible");

    gui
        .addColor(options, "color")
        .onChange((color) => {
            cube.material.color.set(color);
        });
};