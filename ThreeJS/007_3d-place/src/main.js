import * as THREE from "three";
import { OrbitControls } from "three/addons";
import { GUI } from "lil-gui";
import { gsap } from "gsap";

window.addEventListener("load", () => {
    init();
});


const init = () => {
    const gui = new GUI(); // GUI 인스턴스 생성
    const renderer = new THREE.WebGL1Renderer({ // WebGL1 렌더러 생성
        antialias: true, // 안티앨리어싱 사용 설정
    });

    renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기 설정
    document.body.appendChild(renderer.domElement); // 렌더러의 DOM 요소를 body에 추가


    const scene = new THREE.Scene(); // 씬 생성
    const camera = new THREE.PerspectiveCamera(75, // 원근 카메라 생성
        window.innerWidth / window.innerHeight,
        1,
        10000,
    );
    camera.position.z = 100; // 카메라 위치 설정


    // /* 1. Cube Map Texture 를 활용한 3차원 공간 - 1. TextureLoader */
    // /* OrbitControls */
    // const control = new OrbitControls(camera, renderer.domElement); // OrbitControls 생성
    // control.minDistance = 5; // 줌 인 최소 거리 설정
    // control.maxDistance = 100; // 줌 아웃 최대 거리 설정
    //
    /* Texture Loader */
    // const textureLoader = new THREE.TextureLoader().setPath("assets/textures/Yokohama/"); // 텍스처 로더 생성 및 경로 설정
    // const images = [
    //     "posx.jpg", "negx.jpg",
    //     "posy.jpg", "negy.jpg",
    //     "posz.jpg", "negz.jpg",
    // ]; // 텍스처 파일 목록
    //
    // /*Geometry - Box Geometry*/
    // const boxGeomtry = new THREE.BoxGeometry(5000, 5000, 5000); // 박스 지오메트리 생성
    // const boxMaterials =  images.map(image => new THREE.MeshBasicMaterial({ // 박스의 재질 생성
    //     map: textureLoader.load(image), // 텍스처 맵핑
    //     side: THREE.BackSide, // 뒷면 표시 설정
    // }));
    // const skybox = new THREE.Mesh(boxGeomtry, boxMaterials); // 스카이박스 메쉬 생성
    // scene.add(skybox); // 씬에 스카이박스 추가

    /* 2. Cube Map Texture 를 활용한 3차원 공간 - 2. CubeTextureLoader*/
    /* OrbitControls */
    // const control = new OrbitControls(camera, renderer.domElement); // OrbitControls 생성
    // control.minDistance = 5; // 줌 인 최소 거리 설정
    // control.maxDistance = 100; // 줌 아웃 최대 거리 설정


    /* Texture Loader */
    // const cubeTextureLoader = new THREE.CubeTextureLoader().setPath("assets/textures/Yokohama/");
    // const images = [
    //     "posx.jpg", "negx.jpg",
    //     "posy.jpg", "negy.jpg",
    //     "posz.jpg", "negz.jpg",
    // ];

    // const cubeTexture = cubeTextureLoader.load(images); // 큐브 텍스처 로드
    // scene.background = cubeTexture; // 씬의 배경으로 설정


    /* 3. Panorama Texture 를 활용한 3차원 공간 */
    /* OrbitControls */
    const control = new OrbitControls(camera, renderer.domElement); // OrbitControls 생성
    control.enableZoom = false; // 줌 비활성화
    control.enableDamping = true; // 댐핑 활성화
    control.autoRotate = true; // 자동 회전 활성화
    control.autoRotate = 0.1; // 자동 회전 속도 설정


    /* TexutreLoader with EquirectangularRefractionMapping */
    const textureLoader = new THREE.TextureLoader(); // 텍스처 로더 생성
    const texture = textureLoader.load("assets/textures/village.jpeg"); // 텍스처 로드
    // texture.mapping = THREE.EquirectangularRefractionMapping; // 굴절 효과를 시뮬레이션하는 텍스처 매핑
    texture.mapping = THREE.EquirectangularReflectionMapping; // 반사 효과를 시뮬레이션하는 텍스처 매핑
    scene.background = texture; // 씬의 배경으로 설정

    // /* Sphere Geomtry */
    const sphereGeomtry = new THREE.SphereGeometry(30, 50, 50); // 구체 지오메트리 생성
    const spehereMaterial = new THREE.MeshBasicMaterial({ // 구체의 재질 생성
        envMap: texture, // 환경 맵 설정
        reflectivity: 0.9, // 반사도 설정
    });
    const sphere = new THREE.Mesh(sphereGeomtry, spehereMaterial); // 구체 메쉬 생성
    scene.add(sphere); // 씬에 구체 추가

    // /* GUI */
    gui.add(texture, "mapping", { // GUI에 텍스처 매핑 옵션 추가
        Reflaction: THREE.EquirectangularRefractionMapping, // 굴절 효과 매핑
        Reflection: THREE.EquirectangularReflectionMapping // 반사 효과 매핑
    }).onChange((event) => { // 변경 이벤트 핸들러
        spehereMaterial.needsUpdate = true; // 재질 업데이트 필요
    });
    gui.add(spehereMaterial, "reflectivity").min(0).max(1).step(0.01); // 반사도 조절 슬라이더 추가
    gui.add(spehereMaterial, "refractionRatio").min(0).max(1).step(0.01); // 굴절 비율 조절 슬라이더 추가



    const render = () => {
        control.update();
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