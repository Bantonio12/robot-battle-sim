import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

loader.load(
    'path/to/your/model.glb', // 모델 파일 경로
    (gltf) => {
        // 로드 성공 시 실행
        scene.add(gltf.scene);
    },
    (xhr) => {
        // 로딩 진행 상황 표시
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        // 로드 실패 시 에러 출력
        console.error('An error happened', error);
    }
);