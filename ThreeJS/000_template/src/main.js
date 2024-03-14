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
    const camera = new THREE.PerspectiveCamera(75,
        window.innerWidth / window.innerHeight,
        1,
        500,
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