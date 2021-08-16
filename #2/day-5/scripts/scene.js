function createScene() {
  const scene = new BABYLON.Scene(engine);
  scene.enablePhysics(null, new BABYLON.CannonJSPlugin());

  new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
  const box = createBox();
  const camera = createCamera();
  createGround();

  move(scene, box) // RUIM MELHORAR

  camera.lockedTarget = box;

  scene.debugLayer.show();

  return scene;
}

function move(scene, box) {
  const inputMap = {};

  scene.actionManager = new BABYLON.ActionManager(scene); // (box)?

  scene.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {
      inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    })
  );

  scene.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) { 
      inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    })
  );

  scene.onBeforeRenderObservable.add(() => {
    if(inputMap["w"] || inputMap["ArrowUp"]){
      box.position.z+=0.1;
    }
    if(inputMap["a"] || inputMap["ArrowLeft"]){
      box.position.x-=0.1;
    }
    if(inputMap["s"] || inputMap["ArrowDown"]){
      box.position.z-=0.1;
    }
    if(inputMap["d"] || inputMap["ArrowRight"]){
      box.position.x+=0.1;
    }
  })
}