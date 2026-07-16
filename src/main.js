import { createCamera } from './scene/camera.js';
import { createRenderer } from './scene/renderer.js';
import { createScene } from './scene/sceneSetUp.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const camera = createCamera();
const renderer = createRenderer();
const scene = createScene();
const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
