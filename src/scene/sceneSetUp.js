//아래 코드들 모듈화시켜서 각각의 스크립트로 만들기.

import * as THREE from 'three';
import { loadCharacter } from './modelLoader.js';

//-----------------------------------------------------------
//기본 세팅 (장면, 카메라, 렌더러)
export function createScene() {
    // 1. 장면 설정
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);  //이게 무슨 색이지 (??아 예??) => 0x222222는 아주 어두운 짙은 회색(Dark Gray)

    // 카메라는 camera.js에서 함수로 콜 하는 방식으로 변경함 나중에 main.js에서 호출해서 사용

    // 렌더러는 renderer.js에서 함수로 콜 하는 방식으로 변경함 나중에 main.js에서 호출해서 사용

    // 2. 조명 (모델이 검게 나오지 않게 하려면 필수)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // 컨트롤러는 main.js에서 콜하는 방식으로 변경함

    //-----------------------------------------------------------

    // 두 캐릭터 로드
    // modelLoader.js에서 loadCharacter 함수를 가져와서 사용하도록 변경함
    
    // loadCharacter('models/UAL2_Standard.glb', (model) => {
    //     model.position.set(-1.5, 0, 0); // 첫 번째 캐릭터 위치
    //     scene.add(model);
    // });
    // loadCharacter('models/UAL2_Standard.glb', (model) => {
    //     model.position.set(1.5, 0, 0); // 두 번째 캐릭터 위치
    //     scene.add(model);
    // });

    // animate도 main.js에서 콜하는 방식으로 변경함
    return scene;
}