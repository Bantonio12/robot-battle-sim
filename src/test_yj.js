//여기에 코드를 짜야한다는 거를 잊지 않기 위한 주석

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//-----------------------------------------------------------
//기본 세팅 (장면, 카메라, 렌더러)
// 1. 장면 설정
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);  //이게 무슨 색이지

// 2. 카메라 설정
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5); // 캐릭터를 잘 볼 수 있도록 카메라 위치 조정
camera.lookAt(0, 1, 0); // 캐릭터가 있는 위치를 바라보도록 설정

// 3. 렌더러 설정
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. 조명 (모델이 검게 나오지 않게 하려면 필수)
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 5. 컨트롤러 추가 (이게 있어야 마우스로 시점 변경 가능)
const controls = new OrbitControls(camera, renderer.domElement);

//-----------------------------------------------------------
//GLTF 모델 불러오기
const loader = new GLTFLoader();

function loadCharacter(url, positionX) {
    loader.load(url, (gltf) => {
        const model = gltf.scene;
        model.position.set(positionX, 0, 0); // 캐릭터 위치 배치
        scene.add(model);
    });
}

// 두 캐릭터 로드
loadCharacter('path/to/character1.glb', -1.5);
loadCharacter('path/to/character2.glb', 1.5);


//-----------------------------------------------------------

function animate() {
    requestAnimationFrame(animate);
    
    // 컨트롤러를 매 프레임 업데이트해줘야 마우스 입력이 반영됨
    controls.update(); 
    
    renderer.render(scene, camera);
}
animate();