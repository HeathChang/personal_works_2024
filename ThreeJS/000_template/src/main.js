import * as THREE from "three";

window.addEventListener("load", () => {
    init();
});


const init = () => {
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