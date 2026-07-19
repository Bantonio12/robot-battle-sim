// 카메라 설정
import * as THREE from 'three';

export function createCamera() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 2); // 캐릭터를 잘 볼 수 있도록 카메라 위치 조정
    camera.lookAt(0, 2.5, 0); // 캐릭터가 있는 위치를 바라보도록 설정
    return camera;
}