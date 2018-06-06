//////////////////////////////////////////////////////
//// Define global variables for the house
//////////////////////////////////////////////////////
var GROUND_WIDTH = 1500;
var GROUND_HEIGHT = 0.1;
var GROUND_LENGTH = 1500;


var FLOOR_WIDTH = 80;
var FLOOR_HEIGHT = 0.1;
var FLOOR_LENGTH = 110;

var WALL_HEIGHT = 20;
var WALL_THICKNESS = 0.4;

var WALL_LEFT_LENGTH = 0.65;
var WALL_LEFT2_LENGTH = 0.45;
var WALL_LEFT3_LENGTH = 0.2;
var WALL_RIGHT_LENGTH = 0.8;
var WALL_TOP_WIDTH = 0.35;

var DOOR_THICKNESS = WALL_THICKNESS + 2 * OFFSET;
var DOOR_HEIGHT = WALL_HEIGHT * 0.85;
var DOOR_WIDTH = DOOR_HEIGHT * 0.45;

var WINDOW_THICKNESS = WALL_THICKNESS + 0.08;
var WINDOW_HEIGHT = WALL_HEIGHT * 0.55;
var WINDOW_WIDTH = WINDOW_HEIGHT + 4;

var WINDOW_HEIGHT_TALL = WALL_HEIGHT * 0.8;
var WINDOW_WIDTH_TALL = WINDOW_HEIGHT_TALL - 4.5;

var OFFSET = 0.1;

var WallSideEnum = Object.freeze({
  "none": -1,
  "right": 0,
  "left": 1,
  "top": 2,
  "bottom": 3,
  "front": 4,
  "back": 5
});


//////////////////////////////////////////////////////
//// Define geometries
//////////////////////////////////////////////////////
var geometry_ground = new THREE.CubeGeometry(GROUND_WIDTH, GROUND_HEIGHT, GROUND_LENGTH);
var geometry_floor = new THREE.CubeGeometry(FLOOR_WIDTH, FLOOR_HEIGHT, FLOOR_LENGTH);
var geometry_wall_parallel = new THREE.CubeGeometry(FLOOR_WIDTH - 0.2, WALL_HEIGHT, WALL_THICKNESS);
var geometry_wall_parallel_out = new THREE.CubeGeometry(FLOOR_WIDTH, WALL_HEIGHT, WALL_THICKNESS);
var geometry_wall_parallel_02 = new THREE.CubeGeometry(FLOOR_WIDTH * 0.25 - 3.6, WALL_HEIGHT, WALL_THICKNESS);
var geometry_wall_parallel_03 = new THREE.CubeGeometry(FLOOR_WIDTH * WALL_TOP_WIDTH, WALL_HEIGHT, WALL_THICKNESS);
var geometry_wall_parallel_04 = new THREE.CubeGeometry(FLOOR_WIDTH * 0.434, WALL_HEIGHT, WALL_THICKNESS);
var geometry_wall_orthogonal = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH);
var geometry_wall_orthogonal_08 = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH * WALL_RIGHT_LENGTH);
var geometry_wall_orthogonal_06 = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH * WALL_LEFT_LENGTH);
var geometry_wall_orthogonal_04 = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH * WALL_LEFT2_LENGTH - 0.2);
var geometry_wall_orthogonal_02 = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH * WALL_LEFT3_LENGTH);
var geometry_wall_diagonal = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH * 0.287);

var geometry_door = new THREE.CubeGeometry(DOOR_WIDTH, DOOR_HEIGHT, DOOR_THICKNESS);
var geometry_entrance = new THREE.CubeGeometry(DOOR_WIDTH * 2.75, DOOR_HEIGHT, DOOR_THICKNESS);

var geometry_window = new THREE.CubeGeometry(WINDOW_WIDTH, WINDOW_HEIGHT, WINDOW_THICKNESS);
var geometry_window_large = new THREE.CubeGeometry(WINDOW_WIDTH * 2 - 8, WINDOW_HEIGHT, WINDOW_THICKNESS);
var geometry_window_tall = new THREE.CubeGeometry(WINDOW_WIDTH_TALL, WINDOW_HEIGHT_TALL, WINDOW_THICKNESS);

var rotate90Degrees = new THREE.Matrix4().makeRotationY(Math.PI / 2);


function buildWall() {
  var geometry_wall = new THREE.CubeGeometry(1, WALL_HEIGHT, WALL_THICKNESS);
  var temp_wall = new THREE.Mesh(geometry_wall, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  temp_wall.position.y += WALL_HEIGHT / 2;
  temp_wall.castShadow = true;
  scene.add(temp_wall);
  return (temp_wall);
}


//////////////////////////////////////////////////////
//// Define functions to build the house
//////////////////////////////////////////////////////
function addDoors() {
  var door_bedroom = new THREE.Mesh(geometry_door, createTextureMaterial('img/txtr_door.png', 1));
  door_bedroom.applyMatrix(rotate90Degrees);
  door_bedroom.position.set(-(FLOOR_WIDTH / 2 - FLOOR_WIDTH / 2 * (1 - WALL_TOP_WIDTH) - 2), DOOR_HEIGHT / 2, 26.5);
  scene.add(door_bedroom);

  var door_toilet = new THREE.Mesh(geometry_door, createTextureMaterial('img/txtr_door.png', 1));
  door_toilet.position.set(-26, DOOR_HEIGHT / 2, FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - FLOOR_LENGTH * 0.2);
  scene.add(door_toilet);

  var door_bathroom = new THREE.Mesh(geometry_door, createTextureMaterial('img/txtr_door.png', 1));
  door_bathroom.position.set(2, DOOR_HEIGHT / 2, FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - FLOOR_LENGTH * 0.2);
  scene.add(door_bathroom);

  var door_garage = new THREE.Mesh(geometry_door, createTextureMaterial('img/txtr_door.png', 1));
  door_garage.position.set(24, DOOR_HEIGHT / 2, FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - FLOOR_LENGTH * 0.2);
  scene.add(door_garage);

  var garage_entrance = new THREE.Mesh(geometry_entrance, createTextureMaterial('img/txtr_garage_door.jpg', 1));
  garage_entrance.position.set(29.40, DOOR_HEIGHT / 2, FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2);
  scene.add(garage_entrance);
}

function addWindows() {
  var Y_POS = WALL_HEIGHT / 2 + 1.3;

  var material_window_large = createTextureMaterial('img/txtr_window_large.png', 1);
  var material_window = createTextureMaterial('img/txtr_window.png', 1);

  var window_bedroom = new THREE.Mesh(geometry_window, material_window);
  window_bedroom.applyMatrix(rotate90Degrees);
  window_bedroom.position.set(-(FLOOR_WIDTH / 2 - geometry_wall_orthogonal.parameters.width / 2), Y_POS, 10);
  scene.add(window_bedroom);

  var window_toilet = new THREE.Mesh(geometry_window, material_window);
  window_toilet.applyMatrix(rotate90Degrees);
  window_toilet.position.set(-(FLOOR_WIDTH / 2 - geometry_wall_orthogonal.parameters.width / 2), Y_POS, 45);
  scene.add(window_toilet);

  var window_toilet2 = new THREE.Mesh(geometry_window, material_window);
  window_toilet2.position.set(-30, Y_POS, FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2);
  scene.add(window_toilet2);

  var window_bathroom = new THREE.Mesh(geometry_window_large, material_window_large);
  window_bathroom.position.set(0, Y_POS, FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2);
  scene.add(window_bathroom);

  var window_kitchen = new THREE.Mesh(geometry_window_large, material_window_large);
  window_kitchen.applyMatrix(rotate90Degrees);
  window_kitchen.position.set(FLOOR_WIDTH / 2 - geometry_wall_orthogonal.parameters.width / 2, Y_POS, 15);
  scene.add(window_kitchen);

  var window_livingroom = new THREE.Mesh(geometry_window_tall, material_window);
  window_livingroom.applyMatrix(rotate90Degrees);
  window_livingroom.position.set(FLOOR_WIDTH / 2 - geometry_wall_orthogonal.parameters.width / 2, Y_POS-2, -15);
  scene.add(window_livingroom);

  var rot = new THREE.Matrix4();
  rot.makeRotationY(-0.77);
  var window_livingroom_diagonalright = new THREE.Mesh(geometry_window_tall, material_window);
  window_livingroom_diagonalright.applyMatrix(rot);
  window_livingroom_diagonalright.position.set(FLOOR_WIDTH / 2 - FLOOR_WIDTH / 2 * (1 - WALL_TOP_WIDTH) + 14.5, Y_POS-2, -43.9);
  scene.add(window_livingroom_diagonalright);

}

var wall_bottom_out;
var wall_top_out;
var wall_left_out;
var wall_right_out;
var wall_diagonaltop_right;
var wall_diagonaltop_left;
var wall_bottom_10;
var wall_top_left;
var wall_top_right;
var wall_left_04;
var wall_left_02;
var wall_right_02;

function addWalls() {
  wall_bottom_out = new THREE.Mesh(geometry_wall_parallel_out, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  updateTexture(wall_bottom_out, 'img/txtr_brick_brown.jpg', WallSideEnum.front, 8);
  wall_bottom_out.position.y += (geometry_wall_parallel.parameters.height / 2);
  wall_bottom_out.position.z += FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2;
  wall_bottom_out.castShadow = true;
  scene.add(wall_bottom_out);

  wall_top_out = new THREE.Mesh(geometry_wall_parallel_04, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  updateTexture(wall_top_out, 'img/txtr_brick_brown.jpg', WallSideEnum.back, 8);
  updateTexture(wall_top_out, 'img/wand_pattern.jpg', WallSideEnum.front, 1);
  wall_top_out.position.y += (geometry_wall_parallel.parameters.height / 2);
  wall_top_out.position.z -= FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2;
  wall_top_out.castShadow = true;
  scene.add(wall_top_out);

  wall_left_out = new THREE.Mesh(geometry_wall_orthogonal_08, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  updateTexture(wall_left_out, 'img/txtr_brick_brown.jpg', WallSideEnum.left, 8);
  wall_left_out.position.y += (geometry_wall_orthogonal.parameters.height / 2);
  wall_left_out.position.x -= FLOOR_WIDTH / 2 - geometry_wall_orthogonal.parameters.width / 2;
  wall_left_out.position.z += FLOOR_LENGTH / 2 * (1 - WALL_RIGHT_LENGTH) - OFFSET;
  wall_left_out.castShadow = true;
  scene.add(wall_left_out);

  wall_right_out = new THREE.Mesh(geometry_wall_orthogonal_08, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  updateTexture(wall_right_out, 'img/txtr_brick_brown.jpg', WallSideEnum.right, 8);
  wall_right_out.position.y += (geometry_wall_orthogonal.parameters.height / 2);
  wall_right_out.position.x += FLOOR_WIDTH / 2 - geometry_wall_orthogonal.parameters.width / 2;
  wall_right_out.position.z += FLOOR_LENGTH / 2 * (1 - WALL_RIGHT_LENGTH) - OFFSET;
  wall_right_out.castShadow = true;
  scene.add(wall_right_out);

  wall_bottom_10 = new THREE.Mesh(geometry_wall_parallel, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  wall_bottom_10.position.y += (geometry_wall_parallel.parameters.height / 2);
  wall_bottom_10.position.z += FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - FLOOR_LENGTH * 0.2;
  wall_bottom_10.castShadow = true;
  scene.add(wall_bottom_10);

  wall_top_left = new THREE.Mesh(geometry_wall_parallel_03, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  updateTexture(wall_top_left, 'img/wall_pisa.jpg', WallSideEnum.front, 1);
  wall_top_left.position.y += (geometry_wall_parallel.parameters.height / 2);
  wall_top_left.position.x -= FLOOR_WIDTH / 2 * (1 - WALL_TOP_WIDTH) - OFFSET;
  wall_top_left.position.z -= FLOOR_LENGTH / 2 - FLOOR_LENGTH * (1 - WALL_LEFT_LENGTH) - geometry_wall_parallel.parameters.depth / 2;
  wall_top_left.castShadow = true;
  scene.add(wall_top_left);

  wall_top_right = new THREE.Mesh(geometry_wall_parallel_02, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  wall_top_right.position.y += (geometry_wall_parallel.parameters.height / 2);
  wall_top_right.position.x += FLOOR_WIDTH / 2 * (1 - 0.25) - OFFSET + 1.6;
  wall_top_right.position.z -= FLOOR_LENGTH / 2 - FLOOR_LENGTH * (1 - WALL_LEFT_LENGTH) - geometry_wall_parallel.parameters.depth / 2 - 12;
  wall_top_right.castShadow = true;
  scene.add(wall_top_right);

  wall_left_04 = new THREE.Mesh(geometry_wall_orthogonal_04, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  wall_left_04.position.y += (geometry_wall_orthogonal.parameters.height / 2);
  wall_left_04.position.x -= FLOOR_WIDTH / 2 - FLOOR_WIDTH / 2 * (1 - WALL_TOP_WIDTH) - 2;
  wall_left_04.position.z += FLOOR_LENGTH / 2 * (1 - WALL_LEFT_LENGTH) - FLOOR_LENGTH * 0.1 - OFFSET;
  wall_left_04.castShadow = true;
  scene.add(wall_left_04);

  wall_left_02 = new THREE.Mesh(geometry_wall_orthogonal_02, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  wall_left_02.position.y += (geometry_wall_orthogonal.parameters.height / 2);
  wall_left_02.position.x -= FLOOR_WIDTH / 2 - FLOOR_WIDTH / 2 * (1 - WALL_TOP_WIDTH) + 6;
  wall_left_02.position.z += FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - (FLOOR_LENGTH * 0.2) / 2;
  wall_left_02.castShadow = true;
  scene.add(wall_left_02);

  wall_right_02 = new THREE.Mesh(geometry_wall_orthogonal_02, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  wall_right_02.position.y += (geometry_wall_orthogonal.parameters.height / 2);
  wall_right_02.position.x += FLOOR_WIDTH / 2 - FLOOR_WIDTH / 2 * (1 - WALL_TOP_WIDTH) + 5;
  wall_right_02.position.z += FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - (FLOOR_LENGTH * 0.2) / 2;
  wall_right_02.castShadow = true;
  scene.add(wall_right_02);

  var rot = new THREE.Matrix4();
  wall_diagonaltop_right = new THREE.Mesh(geometry_wall_diagonal, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  rot.makeRotationY(0.8);
  wall_diagonaltop_right.applyMatrix(rot);
  updateTexture(wall_diagonaltop_right, 'img/txtr_brick_brown.jpg', WallSideEnum.right, 8);
  wall_diagonaltop_right.position.y += (geometry_wall_orthogonal.parameters.height / 2);
  wall_diagonaltop_right.position.x += FLOOR_WIDTH / 2 - FLOOR_WIDTH / 2 * (1 - WALL_TOP_WIDTH) + 14.5;
  wall_diagonaltop_right.position.z -= FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - (FLOOR_LENGTH * 0.2) / 2 + OFFSET;
  wall_diagonaltop_right.castShadow = true;
  scene.add(wall_diagonaltop_right);

  wall_diagonaltop_left = new THREE.Mesh(geometry_wall_diagonal, createTextureMaterialsArray('img/txtr_white_wall.jpg', 1));
  rot.makeRotationY(-0.8);
  wall_diagonaltop_left.applyMatrix(rot);
  updateTexture(wall_diagonaltop_left, 'img/txtr_brick_brown.jpg', WallSideEnum.left, 8);
  wall_diagonaltop_left.position.y += (geometry_wall_orthogonal.parameters.height / 2);
  wall_diagonaltop_left.position.x -= FLOOR_WIDTH / 2 - FLOOR_WIDTH / 2 * (1 - WALL_TOP_WIDTH) + 14.5;
  wall_diagonaltop_left.position.z -= FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - (FLOOR_LENGTH * 0.2) / 2 + OFFSET;
  wall_diagonaltop_left.castShadow = true;
  scene.add(wall_diagonaltop_left);
}

var floor;

function addFloor() {
  floor = new THREE.Mesh(geometry_floor, createTextureMaterialsArray('img/txtr_floor.jpg', 5));
  scene.add(floor);
}

function addGround() {
  var texture = new THREE.TextureLoader().load('img/grass7.jpg');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(20, 20);
  var groundMaterial = new THREE.MeshBasicMaterial({
    map: texture
  });

  var ground = new THREE.Mesh(geometry_ground, groundMaterial);
  ground.position.y -= 0.1;
  scene.add(ground);
}

var dome;
function addSphere() {
  var texture = new THREE.TextureLoader().load('img/sky12.jpg');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(0,0);
  var domeGeometry = new THREE.SphereGeometry(375, 128, 128, 0.5 * Math.PI, Math.PI, 0.5*Math.PI); // Parameters to generate a semisphere
  var domeMaterial = new THREE.MeshBasicMaterial({
    map: texture
  });
  var rot = new THREE.Matrix4();
  rot.makeRotationX(Math.PI);
  dome = new THREE.Mesh(domeGeometry, domeMaterial);
  dome.applyMatrix(rot);
  dome.position.y -= 100;
  dome.material.side = THREE.DoubleSide;
  scene.add(dome);
}


var livingroom_light;
var bedroom_light;
var bathroom_light;

function addLighting() {
  livingroom_light = new THREE.SpotLight(new THREE.Color(1, 1, 1), (1));
  livingroom_light.decay = 2;
  livingroom_light.penumbra = 0.3;
  livingroom_light.angle = Math.PI * 3 / 4;
  livingroom_light.distance = 150;

  bedroom_light = new THREE.SpotLight(new THREE.Color(1, 1, 1), (1));
  bedroom_light.decay = 2;
  bedroom_light.penumbra = 0.3;
  bedroom_light.angle = Math.PI * 3 / 4;
  bedroom_light.distance = 150;

  bathroom_light = new THREE.SpotLight(new THREE.Color(1, 1, 1), (1));
  bathroom_light.decay = 2;
  bathroom_light.penumbra = 0.3;
  bathroom_light.angle = Math.PI * 3 / 4;
  bathroom_light.distance = 150;
}