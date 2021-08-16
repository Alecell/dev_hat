function createGround() {
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
  const groundMaterial = new BABYLON.StandardMaterial("groundMaterial");

  ground.physicsImpostor = new BABYLON.PhysicsImpostor(
    ground,
    BABYLON.PhysicsImpostor.BoxImpostor, 
    { mass: 0, restitution: .6 }
  );

  groundMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
  ground.material = groundMaterial;

  return ground;
}