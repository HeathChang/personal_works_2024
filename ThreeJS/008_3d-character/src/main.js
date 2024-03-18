import * as THREE from "three"; // Three.js 라이브러리를 가져옵니다.
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // GLTF 모델 로더를 가져옵니다.
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // OrbitControls를 가져옵니다.

window.addEventListener("load", () => { // 페이지가 로드되면 init 함수를 호출합니다.
    init();
});


const init = async () => { // 초기화 함수를 정의합니다.

    const renderer = new THREE.WebGL1Renderer({ // WebGL1Renderer를 생성합니다.
        antialias: true, // 안티앨리어싱을 활성화합니다.
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace; // 출력 색상 공간을 sRGB로 설정합니다.
    renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러의 크기를 창의 크기로 설정합니다.
    renderer.shadowMap.enabled = true; // 그림자 맵을 활성화합니다.


    document.body.appendChild(renderer.domElement); // 렌더러의 DOM 요소를 문서에 추가합니다.
    const scene = new THREE.Scene(); // 씬을 생성합니다.

    /* camera */
    const camera = new THREE.PerspectiveCamera(75, // 원근 카메라를 생성합니다.
        window.innerWidth / window.innerHeight,
        1,
        500,
    );
    camera.position.set(0, 5, 20); // 카메라의 위치를 설정합니다.

    /* OrbitControls */
    const controls = new OrbitControls(camera, renderer.domElement); // OrbitControls를 생성합니다.
    controls.enableDamping = true; // 덤프링을 활성화합니다.
    controls.minDistance = 15; // 카메라와의 최소 거리를 설정합니다.
    controls.maxDistance = 25; // 카메라와의 최대 거리를 설정합니다.
    controls.minPolarAngle = Math.PI / 4; // 카메라의 최소 고도를 설정합니다.
    controls.maxPolarAngle = Math.PI / 3; // 카메라의 최대 고도를 설정합니다.

    /* Progressive Bar Variables*/
    const progresssBar = document.querySelector("#progress-bar"); // 프로그레시브 바 요소를 가져옵니다.
    const progressBarContainer = document.querySelector("#progress-bar-container"); // 프로그레시브 바 컨테이너 요소를 가져옵니다.

    /*Loading Manager*/
    const loadingManager = new THREE.LoadingManager(); // 로딩 매니저를 생성합니다.
    loadingManager.onProgress = (url, loaded, total) => { // 로딩 진행률이 업데이트될 때마다 호출됩니다.
        progresssBar.value = (loaded / total) * 100; // 로딩 진행률을 업데이트합니다.
    };
    loadingManager.onLoad = () => { // 모든 리소스가 로드되면 호출됩니다.
        progressBarContainer.style.display = "none"; // 프로그레시브 바 컨테이너를 숨깁니다.
    };

    /*GLTF Loader*/
    const gltfLoader = new GLTFLoader(loadingManager); // GLTF 로더를 생성합니다.
    const gltf = await gltfLoader.loadAsync("./models/character.gltf"); // GLTF 모델을 비동기적으로 로드합니다.
    const model = gltf.scene; // GLTF 모델의 씬을 가져옵니다.
    model.scale.set(0.1, 0.1, 0.1); // 모델의 크기를 조정합니다.
    model.traverse(obj => { // 모델의 각 객체를 순회하면서
        if (obj.isPush) obj.castShadow = true; // 그림자를 생성할 객체에 그림자를 캐스팅합니다.
    });
    scene.add(model); // 씬에 모델을 추가합니다.

    camera.lookAt(model.position); // 카메라가 모델을 바라보도록 설정합니다.

    /* Plane Geometry*/
    const planeGeometry = new THREE.PlaneGeometry(10000, 10000, 10000); // 평면 지오메트리를 생성합니다.
    const planeMaterial = new THREE.MeshPhongMaterial({color: 0x000000}); // 평면 재질을 생성합니다.
    const plane = new THREE.Mesh(planeGeometry, planeMaterial); // 평면 메쉬를 생성합니다.
    plane.rotation.x = -Math.PI / 2; // 평면을 x축 기준으로 회전합니다.
    plane.position.y = -7.5; // 평면의 y 좌표를 설정합니다.
    plane.receiveShadow = true; // 그림자를 받도록 설정합니다.
    scene.add(plane); // 씬에 평면을 추가합니다.


    /*Light -hemiLight*/
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x333333); // 반구광을 생성합니다.
    hemiLight.position.set(0, 20, 10); // 빛의 위치를 설정합니다.
    scene.add(hemiLight); // 씬에 반구광을 추가합니다.

    /*Light - spotLight*/
    const spotLight = new THREE.SpotLight(0xffffff, 1.5, 30, Math.PI * 0.15, 0.5, 0.5); // 스포트라이트를 생성합니다.
    spotLight.position.set(0, 20, 0); // 빛의 위치를 설정합니다.
    spotLight.castShadow = true; // 그림자를 캐스팅하도록 설정합니다.
    spotLight.shadow.mapSize.width = 1024; // 그림자 맵의 너비를 설정합니다.
    spotLight.shadow.mapSize.height = 1024; // 그림자 맵의 높이를 설정합니다.
    spotLight.shadow.radius = 8; // 그림자의 흐림 정도를 설정합니다.
    scene.add(spotLight); // 씬에 스포트라이트를 추가합니다.


    let currentAction;

    /*Mixer*/
    const mixer = new THREE.AnimationMixer(model); // 애니메이션 믹서를 생성합니다.
    const combatAnimations = gltf.animations.slice(0, 5); // 전투 애니메이션을 가져옵니다.
    const dancingAnimations = gltf.animations.slice(5); // 춤추는 애니메이션을 가져옵니다.
    const hasAnimation = gltf.animations.length !== 0; // 애니메이션이 있는지 확인합니다.
    if (hasAnimation) { // 애니메이션이 있는 경우
        currentAction = mixer.clipAction(gltf.animations[0]); // 현재 액션을 설정합니다.
        currentAction.play(); // 애니메이션을 재생합니다.
    }

    /* Button for combat animations */
    const buttons = document.querySelector(".actions"); // 액션 버튼 컨테이너를 가져옵니다.
    combatAnimations.forEach(animation => { // 각 전투 애니메이션에 대해 반복합니다.
        const button = document.createElement("button"); // 버튼을 생성합니다.
        button.innerText = animation.name; // 버튼의 텍스트를 설정합니다.
        button.addEventListener("click", () => { // 버튼에 클릭 이벤트를 추가합니다.
            const previousAction = currentAction; // 이전 액션을 저장합니다.
            currentAction = mixer.clipAction(animation); // 현재 액션을 설정합니다.
            if (previousAction !== currentAction) { // 이전 액션이 현재 액션과 다른 경우
                previousAction.fadeOut(0.5); // 이전 액션을 페이드 아웃합니다.
                currentAction.reset().fadeIn(0.5).play(); // 현재 액션을 재생합니다.
            }
        });
        buttons.appendChild(button); // 버튼을 액션 버튼 컨테이너에 추가합니다.
    });


    /* Raycaster - 교차점 찾기 */
    const raycaster = new THREE.Raycaster(); // 레이캐스터를 생성합니다.
    const pointer = new THREE.Vector2(); // 포인터를 생성합니다.

    const clock = new THREE.Clock(); // 클락을 생성합니다.
    const render = () => { // 렌더 함수를 정의합니다.
        const delta = clock.getDelta(); // 시간 간격을 가져옵니다.
        mixer.update(delta); // 믹서를 업데이트합니다.
        renderer.render(scene, camera); // 씬을 렌더링합니다.
        requestAnimationFrame(render); // 다음 프레임을 요청합니다.
    };


    const handleResize = () => { // 리사이즈 이벤트 핸들러를 정의합니다.
        camera.aspect = window.innerWidth / window.innerHeight; // 카메라의 종횡비를 설정합니다.
        camera.updateProjectionMatrix(); // 카메라의 프로젝션 매트릭스를 업데이트합니다.
        renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러의 크기를 조정합니다.
        renderer.render(scene, camera); // 새로 렌더된 내용을 반영합니다.
    };

    const handleFinished = () => { // 애니메이션 종료 이벤트 핸들러를 정의합니다.
        const previousAction = currentAction; // 이전 액션을 저장합니다.
        currentAction = mixer.clipAction(combatAnimations[0]) // 현재 액션을 설정합니다.
        previousAction.fadeOut(0.5); // 이전 액션을 페이드 아웃합니다.
        currentAction.reset().fadeIn(0.5).play(); // 현재 액션을 재생합니다.
    }

    const handlePointerDown = event => { // 포인터 다운 이벤트 핸들러를 정의합니다.
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 2; // 포인터의 x 좌표를 설정합니다.
        pointer.y = -(event.clientY / window.innerHeight - 0.5) * 2; // 포인터의 y 좌표를 설정합니다.
        raycaster.setFromCamera(pointer, camera); // 레이캐스터를 카메라 위치에서 포인터 방향으로 설정합니다.
        const intersects = raycaster.intersectObjects(scene.children); // 씬의 객체들과 레이의 교차점을 찾습니다.
        const object = intersects[0]?.object; // 첫 번째 교차 객체를 가져옵니다.
        if (object.name === "Ch46") { // 객체의 이름이 "Ch46"인 경우
            const previousAction = currentAction; // 이전 액션을 저장합니다.
            const index = Math.round(Math.random() * (dancingAnimations.length - 1)); // 임의의 인덱스를 가져옵니다.
            currentAction = mixer.clipAction(dancingAnimations[index]); // 현재 액션을 설정합니다.
            currentAction.loop = THREE.LoopOnce; // 한 번만 재생하도록 설정합니다.
            currentAction.clapWhenFinished = true; // 종료 시 손뼉을 치도록 설정합니다.

            if (previousAction !== currentAction) { // 이전 액션이 현재 액션과 다른 경우
                previousAction.fadeOut(0.5); // 이전 액션을 페이드 아웃합니다.
                currentAction.reset().fadeIn(0.5).play(); // 현재 액션을 재생합니다.
            }

            mixer.addEventListener("finished", handleFinished) // 애니메이션 종료 이벤트를 처리합니다.
        }
    };

    render(); // 렌더 함수를 호출하여 렌더링을 시작합니다.
    window.addEventListener("resize", handleResize); // 리사이즈 이벤트를 처리합니다.
    window.addEventListener("pointerdown", handlePointerDown); // 포인터 다운 이벤트를 처리합니다.

};
