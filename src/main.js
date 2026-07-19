import { createCamera } from './scene/camera.js';
import { createRenderer } from './scene/renderer.js';
import { createScene } from './scene/sceneSetUp.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//hitbox 관련 코드 import
import { initCharacterWithHitbox } from './hitbox.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

const camera = createCamera();
const renderer = createRenderer();
const scene = createScene();
const controls = new OrbitControls(camera, renderer.domElement);

//hitbox code
initCharacterWithHitbox(scene, '/models/UAL2_Standard.glb', 'UAL2_Standard');

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
