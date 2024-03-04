import * as THREE from "three";

window.addEventListener("load", () => {
    init();
});


const init = () => {
    // SECTION:: SCENE
    const scene = new THREE.Scene({});


    // SECTION:: Camera
    const camera = new THREE.PerspectiveCamera(
        75, //field-of-view > extent of the scene that is seen on the display at any given moment
        window.innerWidth / window.innerHeight, // aspect ratio >  width of the element divided by the heigh
        1, // near > 얼마나 가까이 보이는지
        500, // far > 얼마나 멀리 보이는지
    );

    // SECTION:: RENDERER
    const renderer = new THREE.WebGL1Renderer({
        antialias: true, // 병목현상 제거
        alpha: true, // 기본 검정색 > 흰색으로 변경
    }); // Renderer : 영화관
    renderer.setSize(window.innerWidth, window.innerHeight); // 영화관(canvas) 크기 > 전체 화면
    document.body.appendChild(renderer.domElement);


    // 3D Objects
    // BoxGeometry: contains all the points (vertices) and fill (faces) of the cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // MeshBasicMaterial: define the appearance of an object
    const material = new THREE.MeshBasicMaterial({color: 0xcc99ff});
    //  new Mesh object
    const cube = new THREE.Mesh(geometry, material);
    camera.position.set(3, 4, 5);
    camera.lookAt(cube.position); // 정중앙
    // 3D obj 를 추가 후, 위치를 조정하지않을 경우 원점에 놓임.
    // 카메라가 Mesh를 시야에 담을 수 없음 (동일 선상에 있기때문)


    scene.add(cube);
    renderer.render(scene, camera); // 영화관에 담을 애들 넣어주기

};