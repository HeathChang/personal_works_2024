import * as THREE from "three";

window.addEventListener("load", () => {
    init();
});


const init = () => {
    const renderer = new THREE.WebGL1Renderer({
        antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight); // 영화관(canvas) 크기

    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, //field-of-view(시야각) > 얼마큼의 시야각으로 물체를 바라볼지, 넓을 수록 더 많이 담김
        window.innerWidth / window.innerHeight, // 종횡비 >
        1, // near > 얼마나 가까이 보이는지
        500, // far > 얼마나 멀리 보이는지
    );
    camera.position.z = 5;


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