import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 히트박스 크기 및 뼈 위치 프리셋
const HITBOX_PRESETS = {
    'UAL2_Standard': [
        { boneName: 'hand_r', size: new THREE.Vector3(0.1, 0.4, 0.1) , offset: new THREE.Vector3(0, 0, 0) },//오른손
        { boneName: 'hand_l', size: new THREE.Vector3(0.1, 0.4, 0.1) , offset: new THREE.Vector3(0, 0, 0) },//왼손
        { boneName: 'foot_r', size: new THREE.Vector3(0.1, 0.27, 0.1) , offset: new THREE.Vector3(0, 0.05, 0) },//오른발
        { boneName: 'foot_l', size: new THREE.Vector3(0.1, 0.27, 0.1) , offset: new THREE.Vector3(0, 0.05, 0) },//왼발
        { boneName: 'Head',   size: new THREE.Vector3(0.15, 0.3, 0.2) , offset: new THREE.Vector3(0, 0.11, 0) },//머리
        { boneName: 'spine_03', size: new THREE.Vector3(0.3, 0.2, 0.27) , offset: new THREE.Vector3(0, 0.1, 0) }, //가슴
        { boneName: 'spine_02', size: new THREE.Vector3(0.3, 0.3, 0.27) , offset: new THREE.Vector3(0, 0, 0) }, //배
        { boneName: 'pelvis', size: new THREE.Vector3(0.3, 0.1, 0.25) , offset: new THREE.Vector3(0, 0.08, 0.02) },  //골반
        { boneName: 'thigh_l', size: new THREE.Vector3(0.15, 0.4, 0.15) , offset: new THREE.Vector3(0, 0.15, 0) },  //왼쪽 대퇴골
        { boneName: 'thigh_r', size: new THREE.Vector3(0.15, 0.4, 0.15) , offset: new THREE.Vector3(0, 0.15, 0) },  //오른쪽 대퇴골
        { boneName: 'calf_l', size: new THREE.Vector3(0.1, 0.4, 0.1) , offset: new THREE.Vector3(0, 0.2, 0) },  //왼쪽 허벅지
        { boneName: 'calf_r', size: new THREE.Vector3(0.1, 0.4, 0.1) , offset: new THREE.Vector3(0, 0.2, 0) },   //오른쪽 허벅지
        { boneName: 'lowerarm_l', size: new THREE.Vector3(0.12, 0.4, 0.1) , offset: new THREE.Vector3(0, -0.1, 0) },    //왼쪽 팔
        { boneName: 'lowerarm_r', size: new THREE.Vector3(0.12, 0.4, 0.1) , offset: new THREE.Vector3(0, -0.1, 0) },    //오른쪽 팔
    ]
};

export function initCharacterWithHitbox(scene, url, modelKey) {
    const loader = new GLTFLoader();

    loader.load(url, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        console.log("모델 추가 성공:", model); // 이 메시지가 콘솔에 찍히나요?
        
        // 1. 선택된 모델 키값(modelKey)에 해당하는 히트박스 설정들을 가져옵니다.
        // 만약 설정이 없다면 빈 배열([])을 사용하여 오류를 방지합니다.
        const configs = HITBOX_PRESETS[modelKey] || [];

        // 2. 모델의 모든 하위 객체(뼈, 메쉬 등)를 순회하며 탐색
        model.traverse((node) => {
            // 3. 현재 탐색 중인 객체가 '뼈(Bone)'인지 확인
            if (node.isBone) {
                // 4. 미리 정의한 configs 배열에서 현재 뼈 이름과 일치하는 설정이 있는지 찾습니다.
                const config = configs.find(c => c.boneName === node.name);
                // 5. 일치하는 설정이 있다면 히트박스를 생성
                if (config) {
                    // 6. 설정된 크기(size)로 박스 형태(Geometry)를 만듭니다.
                    const box = new THREE.Mesh(
                        new THREE.BoxGeometry(config.size.x, config.size.y, config.size.z),
                        // 7. 디버깅을 위해 빨간색 투명 와이어프레임 재질(Material)을 적용합니다.
                        new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true, transparent: true, opacity: 0.5 })
                    );
                    // 위치 오프셋 적용
                    if (config.offset) {
                    box.position.set(config.offset.x, config.offset.y, config.offset.z);
                    }
                    // 8. 나중에 충돌 판정 시 이 객체를 찾기 쉽게 이름을 부여합니다.
                    box.name = "hitbox_" + node.name;
                    // 9. [중요] 생성된 히트박스를 해당 뼈의 자식으로 추가합니다.
                    // 뼈가 움직이면 자식인 히트박스도 자동으로 따라 움직이게 됩니다.
                    node.add(box);
                }
            }
        });
        console.log(`${modelKey} 모델 히트박스 세팅 완료`);
    });
}