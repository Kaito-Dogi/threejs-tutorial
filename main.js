window.addEventListener("DOMContentLoaded", init);

function init() {
  const width = 960;
  const height = 540;

  // レンダラーの作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#my-canvas"),
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // シーンの作成
  const scene = new THREE.Scene();

  // カメラの作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, 1000);

  // 立方体の作成
  const geometry = new THREE.BoxGeometry(500, 500, 500);
  const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  // ライトの作成
  const light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 2;
  light.position.set(1, 1, 1);
  scene.add(light);

  // 描画
  renderer.render(scene, camera);
}
