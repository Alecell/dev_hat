function createCamera() {
  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI/2, 1.3, 20, new BABYLON.Vector3(0, 1, 0));

  camera.heightOffset = 8;
  camera.radius = 5;
  camera.rotationOffset = 0;
  camera.cameraAcceleration = 0.005
  camera.maxCameraSpeed = 10

  return camera;
}