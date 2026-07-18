import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * 1. 뼈 이름을 콘솔에 출력하는 전용 함수
 */
export function printBoneNames(url) {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
        gltf.scene.traverse((node) => {
            if (node.isBone) console.log("뼈 이름:", node.name);
        });
    });
}

export function initCharacterWithHitbox(scene, url, boneName, size) {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // 히트박스 로직 수행
        let targetBone = null;
        model.traverse((node) => {
            if (node.isBone && node.name === boneName) targetBone = node;
        });

        if (targetBone) {
            const hitbox = new THREE.Mesh(
                new THREE.BoxGeometry(size.x, size.y, size.z),
                new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true, transparent: true, opacity: 0.5 })
            );
            targetBone.add(hitbox);
        } else {
            console.warn(`뼈를 찾을 수 없습니다: ${boneName}`);
        }
    });
}