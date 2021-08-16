function createBox() {
  const box = BABYLON.MeshBuilder.CreateBox("box", {});
  const boxMaterial = new BABYLON.StandardMaterial('boxMaterial');

  box.position.y = 3;
  box.physicsImpostor = new BABYLON.PhysicsImpostor(box, 
    BABYLON.PhysicsImpostor.BoxImpostor, 
    { mass: 1, restitution: .6 }
  );

  boxMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0);
  box.material = boxMaterial;

  return box;
}