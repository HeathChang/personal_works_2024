import * as THREE from "three";
import { FontLoader } from "three/addons";
// import typeface from "./assets/fonts/The Jamsil 5 Bold_Regular.json";
import { TextGeometry } from "three/addons";
import { OrbitControls } from "three/addons";
import GUI from "lil-gui";

window.addEventListener("load", () => {
    init();
});


const init = async () => {
    const gui = new GUI();
    const renderer = new THREE.WebGL1Renderer({
        antialias: true, // 계단 현상
    }); // Renderer : 영화관

    renderer.setSize(window.innerWidth, window.innerHeight); // 영화관(canvas) 크기

    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, //field-of-view(시야각) > 얼마큼의 시야각으로 물체를 바라볼지, 넓을 수록 더 많이 담김
        window.innerWidth / window.innerHeight, // 종횡비 >
        1, // near > 얼마나 가까이 보이는지
        500, // far > 얼마나 멀리 보이는지
    );
    camera.position.z = 5;

    // SECTION: Orbit Controls
    new OrbitControls(camera, renderer.domElement);

    // SECTION: Font-Loader
    const fontLoader = new FontLoader();


    // MARK 1: load method (경로지정)
    // fontLoader.load(
    //     "./assets/fonts/The Jamsil 5 Bold_Regular.json",
    //     jamsilFont => {
    //         const textGeometry = new TextGeometry("안녕하세요. ", {
    //             font: jamsilFont,
    //             size: 0.5,
    //             height: 0.1,
    //         });
    //
    //         const textMaterial = new THREE.MeshPhongMaterial({color: 0x00c896});
    //         const text = new THREE.Mesh(textGeometry, textMaterial);
    //         scene.add(text);
    //     },
    //     event => {
    //     },
    //     error => {
    //     },
    // );

    // MARK 1-b: load async method (경로지정)
    const jamsilFont = await fontLoader.loadAsync("./assets/fonts/The Jamsil 5 Bold_Regular.json");
    const textGeometry = new TextGeometry("안녕하세요. ", {
        font: jamsilFont,
        size: 0.5,
        height: 0.1,
    });

    const textMaterial = new THREE.MeshPhongMaterial({color: 0x00c896});
    const text = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(text);

    // MARK 2: parse method (객체를 JS로 불러와서, parsing 사용)
    // const jamsilFont = fontLoader.parse(typeface);

    // SECTION: LIGHT
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5, 0xffffff);
    pointLight.position.set(3, 0, 2);
    scene.add(ambientLight);
    scene.add(pointLight, pointLightHelper);

    // SECTION: GUI Controller for Light Control (X,Y,Z)
    gui
        .add(pointLight.position, "x")
        .min(-3)
        .max(3)
        .step(0.1);
    gui
        .add(pointLight.position, "y")
        .min(-3)
        .max(3)
        .step(0.1);
    gui
        .add(pointLight.position, "z")
        .min(-3)
        .max(3)
        .step(0.1);

    // SECTION: 매 프레임마다 Animation 재생 함수
    const render = () => {

        // MARK: 모든 환경에서 동일한 속도로 애니메이션 재생
        renderer.render(scene, camera);
        requestAnimationFrame(render); //  schedule a repaint of the window for the next animation frame.
    };


    // SECTION: 창크기에 따라 renderer 사이즈 변경, 이 때 카메라의 종횡비도 같이 조절돠기에, 카메라 크기도 업데이트 필요.
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera); // 새롭게 render 된 내용을 반영
    };

    render();
    window.addEventListener("resize", handleResize);


};