/*---------------------Selector of models in the scene--------------------*/

var raycaster = new THREE.Raycaster();

var selected_obj;
var selected_obj_color;


function onDocumentMouseDown(event) {
  var mouse = new THREE.Vector2;
  mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
  mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(scene.children, false);

  if (intersects.length > 0) {
    if (!selected_obj) {
      if (isSelectable(intersects[0].object)) {
        selected_obj = intersects[0].object;
        selected_obj_color = intersects[0].object.material.color;
        selected_obj.material.color = new THREE.Color(1, 0.5, 0.5);
      }
    } else {
      var pos = intersects[0].point;
      var oldx = selected_obj.position.x;
      var oldz = selected_obj.position.z;
      selected_obj.position.x = pos.x;
      selected_obj.position.z = pos.z;
      if (computeCollision(selected_obj)) {
        alert("You cannot place the item here. Collision detected.");
        selected_obj.position.x = oldx;
        selected_obj.position.z = oldz;
      } else {
        selected_obj.material.color = selected_obj_color;
        selected_obj = null;
      }
    }
  }
}

function computeCollision(firstObject) {
  var objectsArray = [bed_mesh, lamp_mesh_1, treasurechest2_mesh, nightstand1_mesh, nightstand2_mesh, bookshelf_mesh, fancychair1_mesh,
    fancychair2_mesh, smalltable_mesh, fridge_mesh, dishwasher_mesh, sink_mesh, stove_mesh, aboveoven1_mesh, cabinet1_mesh,
    cabinet2_mesh, bathtube1_mesh, sink3_mesh, toilet1_mesh, treasurechest_mesh, carpet1_mesh, carpet2_mesh, lampbathroom_mesh,
    clothesrack1_mesh, lamp_mesh, sofa_mesh, shelf_mesh, table_mesh, chair_mesh_1, chair_mesh_2, tv_mesh, painting_mesh, car_mesh
  ];
  var firstBB = new THREE.Box3().setFromObject(firstObject);
  for (i = 0; i < objectsArray.length; i++) {
    if (objectsArray[i] != firstObject) {
      var secondBB = new THREE.Box3().setFromObject(objectsArray[i]);
      var collision = firstBB.intersectsBox(secondBB);
      if (collision) {
        return true;
      }
    }
  }
  return false;
}

function isSelectable(mesh) {
  var selectableObjects = [bed_mesh, lamp_mesh_1, treasurechest2_mesh, nightstand1_mesh, nightstand2_mesh, bookshelf_mesh, fancychair1_mesh,
    fancychair2_mesh, smalltable_mesh, fridge_mesh, dishwasher_mesh, sink_mesh, stove_mesh, aboveoven1_mesh, cabinet1_mesh,
    cabinet2_mesh, bathtube1_mesh, sink3_mesh, toilet1_mesh, treasurechest_mesh, carpet1_mesh, carpet2_mesh, lampbathroom_mesh,
    clothesrack1_mesh, lamp_mesh, sofa_mesh, shelf_mesh, table_mesh, chair_mesh_1, chair_mesh_2, tv_mesh, painting_mesh, car_mesh
  ];
  var found = false;
  found = selectableObjects.some(function (element, index, _arr) {
    return mesh.uuid === element.uuid;
  });
  return found;
}

document.addEventListener('mousedown', onDocumentMouseDown, false);