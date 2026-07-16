// modelLoader.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

/**
 * GLB 모델을 로드하여 콜백 함수로 반환하는 함수
 * @param {string} url - 모델 파일 경로
 * @param {function} onLoadCallback - 로드가 완료되었을 때 실행할 함수 (모델을 인자로 받음)
 */

export function loadCharacter(url, onLoadCallback) {
    loader.load(
        url,
        (gltf) => {
            const model = gltf.scene;
            
            // 로드가 완료되면, 불러온 모델을 콜백 함수로 넘겨줍니다.
            onLoadCallback(model);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
            console.error('모델 로딩 중 에러 발생:', error);
        }
    );
}