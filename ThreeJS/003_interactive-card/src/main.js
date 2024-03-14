import * as THREE from "three";
import Card from "./card";
import { OrbitControls } from "three/addons";
import {GUI} from 'lil-gui'

window.addEventListener("load", () => {
    init();
});

const init = () => {
    const gui = new GUI();
    const card = new Card({
        width: 10,
        height: 15.8,
        radius: 0.5,
        color: "#0077ff",
    });


    /* Renderer */
    const renderer = new THREE.WebGL1Renderer({
        antialias: true, // 계단화
        alpha: true, // 투명
    });
    // renderer.setClearAlpha(.9) // 투명 opacity 설정
    // renderer.setClearColor(0x000000, 0.5)
    renderer.setSize(window.innerWidth, window.innerHeight); // 영화관(canvas) 크기
    document.body.appendChild(renderer.domElement);


    /* Scene */
    const scene = new THREE.Scene();
    console.log("card check:: ", card);
    scene.add(card.mesh);

    /* Text Loader & texture background 설정 */
    // const imageUrl = "https://images.unsplash.com/photo-1549793959-284bccc3331b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2t5JTIwdGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D"
    // const textureLoader = new THREE.TextureLoader()
    // const texture = textureLoader.load(imageUrl);
    // scene.background = texture


    /* Camera */
    const camera = new THREE.PerspectiveCamera(75,
        window.innerWidth / window.innerHeight,
        1,
        500,
    );
    camera.position.z = 25;

    /* OrbitControls */
    const controls = new OrbitControls(camera, renderer.domElement)


    /* Light */
    const ambiLight = new THREE.AmbientLight(0xffffff, 0.3);
    ambiLight.position.set(-5, -3, -2);
    scene.add(ambiLight);

    /* Light */
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
    const directionalLight2 = directionalLight1.clone();
    directionalLight1.position.set(1,1,3);
    directionalLight2.position.set(-1, 1, -3)
    scene.add(directionalLight1, directionalLight2)

    /* GUI */
    const cardFolder = gui.addFolder('Card');
    cardFolder.add(card.mesh.material, 'roughness').min(0).max(1).step(0.01)
    cardFolder.add(card.mesh.material, 'metalness').min(0).max(1).step(0.01)

    /* FN, render */
    const render = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };

    /* FN, handleResize */
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera); // 새롭게 render 된 내용을 반영
    };

    render();
    window.addEventListener("resize", handleResize);


};