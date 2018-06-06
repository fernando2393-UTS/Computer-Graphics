function createTextureMaterialsArray(uri, repeats) {
  var material = createTextureMaterial(uri, repeats);
  var materials = [
    material, // Right side 0
    material, // Left side 1
    material, // Top side 2
    material, // Bottom side 3
    material, // Front side 4
    material  // Back side 5
  ];
  return materials;
}

function createTextureMaterial(uri, repeats) {
  var texture = new THREE.TextureLoader().load(uri);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeats, repeats);
  var material = new THREE.MeshLambertMaterial({
    map: texture
  });
  return material;
}

function enlargeMeshX(mesh, xIncrease) {
  mesh.scale.x = xIncrease;
  mesh.updateMatrix();
}

function updateTexture(mesh, texture, side, repeats) {
  mesh.material[side] = createTextureMaterial(texture, repeats);
  mesh.material.needsUpdate = true;
}
