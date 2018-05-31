//////////////////////////////////////////////////////
//// Define global variables for the house
//////////////////////////////////////////////////////

var FLOOR_WIDTH = 80; //x-axis
var FLOOR_HEIGHT = 0.1; //y-axis
var FLOOR_LENGTH = 110; //z-axis

var WALL_HEIGHT = 20;
var WALL_THICKNESS = 0.4;

var WALL_LEFT_LENGTH = 0.65;
var WALL_LEFT2_LENGTH = 0.45;
var WALL_LEFT3_LENGTH = 0.2;
var WALL_RIGHT_LENGTH = 0.8;
var WALL_TOP_WIDTH = 0.35;

var DOOR_THICKNESS = WALL_THICKNESS + 2*OFFSET;
var DOOR_HEIGHT = WALL_HEIGHT*0.85;
var DOOR_WIDTH = DOOR_HEIGHT * 0.45;

var WINDOW_THICKNESS = WALL_THICKNESS + 0.08;
var WINDOW_HEIGHT = WALL_HEIGHT * 0.55;
var WINDOW_WIDTH = WINDOW_HEIGHT + 4;

var WINDOW_HEIGHT_TALL = WALL_HEIGHT * 0.8;
var WINDOW_WIDTH_TALL = WINDOW_HEIGHT_TALL - 4.5;

var OFFSET = 0.1;

var WallSideEnum = Object.freeze({"none":-1, "right":0, "left":1, "top":2, "bottom":3, "front":4, "back":5});


//////////////////////////////////////////////////////
//// Define geometries
//////////////////////////////////////////////////////
var geometry_floor = new THREE.CubeGeometry(FLOOR_WIDTH, FLOOR_HEIGHT, FLOOR_LENGTH);
var geometry_wall_parallel = new THREE.CubeGeometry(FLOOR_WIDTH-0.2, WALL_HEIGHT, WALL_THICKNESS);
var geometry_wall_parallel_out = new THREE.CubeGeometry(FLOOR_WIDTH, WALL_HEIGHT, WALL_THICKNESS);
var geometry_wall_parallel_02 = new THREE.CubeGeometry(FLOOR_WIDTH*0.25, WALL_HEIGHT, WALL_THICKNESS);
var geometry_wall_parallel_03 = new THREE.CubeGeometry(FLOOR_WIDTH*WALL_TOP_WIDTH, WALL_HEIGHT, WALL_THICKNESS);
var geometry_wall_parallel_04 = new THREE.CubeGeometry(FLOOR_WIDTH*0.434, WALL_HEIGHT, WALL_THICKNESS);
var geometry_wall_orthogonal = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH);
var geometry_wall_orthogonal_08 = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH*WALL_RIGHT_LENGTH);
var geometry_wall_orthogonal_06 = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH*WALL_LEFT_LENGTH);
var geometry_wall_orthogonal_04 = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH*WALL_LEFT2_LENGTH-0.2);
var geometry_wall_orthogonal_02 = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH*WALL_LEFT3_LENGTH);
var geometry_wall_diagonal = new THREE.CubeGeometry(WALL_THICKNESS, WALL_HEIGHT, FLOOR_LENGTH*0.287);

var geometry_door = new THREE.CubeGeometry(DOOR_WIDTH, DOOR_HEIGHT, DOOR_THICKNESS);

var geometry_window = new THREE.CubeGeometry(WINDOW_WIDTH, WINDOW_HEIGHT, WINDOW_THICKNESS);
var geometry_window_large = new THREE.CubeGeometry(WINDOW_WIDTH * 2 - 8, WINDOW_HEIGHT, WINDOW_THICKNESS);
var geometry_window_tall = new THREE.CubeGeometry(WINDOW_WIDTH_TALL, WINDOW_HEIGHT_TALL, WINDOW_THICKNESS);

var rotate90Degrees = new THREE.Matrix4().makeRotationY(Math.PI/2);


function buildWall() {
  var geometry_wall = new THREE.CubeGeometry(1, WALL_HEIGHT, WALL_THICKNESS);
  var temp_wall = new THREE.Mesh(geometry_wall, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  temp_wall.position.y += WALL_HEIGHT/2;
  temp_wall.castShadow = true;
  scene.add(temp_wall);
  return(temp_wall);
}


//////////////////////////////////////////////////////
//// Define functions to build the house
//////////////////////////////////////////////////////
function addDoors() {
  var door_bedroom = new THREE.Mesh(geometry_door, createTextureMaterial('http://localhost:8000/img/txtr_door.png', 1));
  door_bedroom.applyMatrix(rotate90Degrees);
  door_bedroom.position.set(-(FLOOR_WIDTH/2-FLOOR_WIDTH/2*(1-WALL_TOP_WIDTH) - 2), DOOR_HEIGHT/2, 26.5);
  scene.add(door_bedroom);

  var door_toilet = new THREE.Mesh(geometry_door, createTextureMaterial('http://localhost:8000/img/txtr_door.png', 1));
  door_toilet.position.set(-26, DOOR_HEIGHT/2, FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - FLOOR_LENGTH * 0.2);
  scene.add(door_toilet);

  var door_bathroom = new THREE.Mesh(geometry_door, createTextureMaterial('http://localhost:8000/img/txtr_door.png', 1));
  door_bathroom.position.set(2, DOOR_HEIGHT/2, FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - FLOOR_LENGTH * 0.2);
  scene.add(door_bathroom);

  var door_garage = new THREE.Mesh(geometry_door, createTextureMaterial('http://localhost:8000/img/txtr_door.png', 1));
  door_garage.position.set(24, DOOR_HEIGHT/2, FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - FLOOR_LENGTH * 0.2);
  scene.add(door_garage);
}

function addWindows() {
  var Y_POS = WALL_HEIGHT/2 + 1.3;

  var material_window_tall = createTextureMaterial('http://localhost:8000/img/txtr_window_tall.png', 1);
  var material_window_large = createTextureMaterial('http://localhost:8000/img/txtr_window_large.png', 1);
  var material_window = createTextureMaterial('http://localhost:8000/img/txtr_window.png', 1);

  var window_bedroom = new THREE.Mesh(geometry_window, material_window);
  window_bedroom.material.transparent = true;
  window_bedroom.applyMatrix(rotate90Degrees);
  window_bedroom.position.set(-(FLOOR_WIDTH/2 - geometry_wall_orthogonal.parameters.width/2), Y_POS, 10);
  scene.add(window_bedroom);

  var window_toilet = new THREE.Mesh(geometry_window, material_window);
  window_toilet.applyMatrix(rotate90Degrees);
  window_toilet.position.set(-(FLOOR_WIDTH/2 - geometry_wall_orthogonal.parameters.width/2), Y_POS, 45);
  scene.add(window_toilet);

  var window_toilet2 = new THREE.Mesh(geometry_window, material_window);
  window_toilet2.position.set(-30, Y_POS , FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2);
  scene.add(window_toilet2);

  var window_bathroom = new THREE.Mesh(geometry_window_large, material_window_large);
  window_bathroom.position.set(0, Y_POS, FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2);
  scene.add(window_bathroom);

  var window_kitchen = new THREE.Mesh(geometry_window_large, material_window_large);
  window_kitchen.applyMatrix(rotate90Degrees);
  window_kitchen.position.set(FLOOR_WIDTH / 2 - geometry_wall_orthogonal.parameters.width / 2, Y_POS, 15);
  scene.add(window_kitchen);

  var window_livingroom = new THREE.Mesh(geometry_window_tall, material_window_tall);
  window_livingroom.applyMatrix(rotate90Degrees);
  window_livingroom.position.set(FLOOR_WIDTH / 2 - geometry_wall_orthogonal.parameters.width / 2, Y_POS, -15);
  scene.add(window_livingroom);
}

function addWalls() {
  var wall_bottom_out = new THREE.Mesh(geometry_wall_parallel_out, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  updateTexture(wall_bottom_out, 'http://localhost:8000/img/txtr_brick_brown_light.jpg', WallSideEnum.front, 8);
  wall_bottom_out.position.y += (geometry_wall_parallel.parameters.height / 2);
  wall_bottom_out.position.z += FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2;
  wall_bottom_out.castShadow = true;
  scene.add(wall_bottom_out);

  var wall_top_out = new THREE.Mesh(geometry_wall_parallel_04, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  updateTexture(wall_top_out, 'http://localhost:8000/img/txtr_brick_brown_light.jpg', WallSideEnum.back, 8);
  updateTexture(wall_top_out, 'http://localhost:8000/img/wand_pattern.jpg', WallSideEnum.front, 1);
  wall_top_out.position.y+= (geometry_wall_parallel.parameters.height/2);
  wall_top_out.position.z-=FLOOR_LENGTH/2 - geometry_wall_parallel.parameters.depth/2;
  wall_top_out.castShadow = true;
  scene.add(wall_top_out);

  var wall_left_out = new THREE.Mesh(geometry_wall_orthogonal_08, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  updateTexture(wall_left_out, 'http://localhost:8000/img/txtr_brick_brown_light.jpg', WallSideEnum.left, 8);
  wall_left_out.position.y+=(geometry_wall_orthogonal.parameters.height/2);
  wall_left_out.position.x-=FLOOR_WIDTH/2 - geometry_wall_orthogonal.parameters.width/2;
  wall_left_out.position.z+=FLOOR_LENGTH/2*(1-WALL_RIGHT_LENGTH) - OFFSET;
  wall_left_out.castShadow = true;
  scene.add(wall_left_out);

  var wall_right_out = new THREE.Mesh(geometry_wall_orthogonal_08, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  updateTexture(wall_right_out, 'http://localhost:8000/img/txtr_brick_brown_light.jpg', WallSideEnum.right, 8);
  wall_right_out.position.y += (geometry_wall_orthogonal.parameters.height / 2);
  wall_right_out.position.x += FLOOR_WIDTH / 2 - geometry_wall_orthogonal.parameters.width / 2;
  wall_right_out.position.z += FLOOR_LENGTH / 2 * (1 - WALL_RIGHT_LENGTH) - OFFSET;
  wall_right_out.castShadow = true;
  scene.add(wall_right_out);

  var wall_bottom_10 = new THREE.Mesh(geometry_wall_parallel, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  wall_bottom_10.position.y += (geometry_wall_parallel.parameters.height / 2);
  wall_bottom_10.position.z += FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - FLOOR_LENGTH * 0.2;
  wall_bottom_10.castShadow = true;
  scene.add(wall_bottom_10);

  var wall_top_left = new THREE.Mesh(geometry_wall_parallel_03, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  updateTexture(wall_top_left, 'http://localhost:8000/img/wall_pisa.jpg', WallSideEnum.front, 1);
  wall_top_left.position.y+=(geometry_wall_parallel.parameters.height/2);
  wall_top_left.position.x-=FLOOR_WIDTH/2*(1-WALL_TOP_WIDTH) - OFFSET;
  wall_top_left.position.z-=FLOOR_LENGTH/2-FLOOR_LENGTH*(1-WALL_LEFT_LENGTH) - geometry_wall_parallel.parameters.depth/2;
  wall_top_left.castShadow = true;
  scene.add(wall_top_left);

  var wall_top_right = new THREE.Mesh(geometry_wall_parallel_02, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  wall_top_right.position.y+=(geometry_wall_parallel.parameters.height/2);
  wall_top_right.position.x+=FLOOR_WIDTH/2*(1-0.25) - OFFSET;
  wall_top_right.position.z-=FLOOR_LENGTH/2-FLOOR_LENGTH*(1-WALL_LEFT_LENGTH) - geometry_wall_parallel.parameters.depth/2 - 12;
  wall_top_right.castShadow = true;
  scene.add(wall_top_right);

  var wall_left_04 = new THREE.Mesh(geometry_wall_orthogonal_04, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  wall_left_04.position.y+=(geometry_wall_orthogonal.parameters.height/2);
  wall_left_04.position.x-=FLOOR_WIDTH/2-FLOOR_WIDTH/2*(1-WALL_TOP_WIDTH) - 2;
  wall_left_04.position.z+=FLOOR_LENGTH/2*(1-WALL_LEFT_LENGTH) - FLOOR_LENGTH*0.1 - OFFSET;
  wall_left_04.castShadow = true;
  scene.add(wall_left_04);

  var wall_left_02 = new THREE.Mesh(geometry_wall_orthogonal_02, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  wall_left_02.position.y+=(geometry_wall_orthogonal.parameters.height/2);
  wall_left_02.position.x-=FLOOR_WIDTH/2-FLOOR_WIDTH/2*(1-WALL_TOP_WIDTH) + 6;
  wall_left_02.position.z+=FLOOR_LENGTH/2 - geometry_wall_parallel.parameters.depth/2 - (FLOOR_LENGTH*0.2)/2;
  wall_left_02.castShadow = true;
  scene.add(wall_left_02);

  var wall_right_02 = new THREE.Mesh(geometry_wall_orthogonal_02, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  wall_right_02.position.y+=(geometry_wall_orthogonal.parameters.height/2);
  wall_right_02.position.x+=FLOOR_WIDTH/2-FLOOR_WIDTH/2*(1-WALL_TOP_WIDTH) + 5 ;
  wall_right_02.position.z+=FLOOR_LENGTH/2 - geometry_wall_parallel.parameters.depth/2 - (FLOOR_LENGTH*0.2)/2;
  wall_right_02.castShadow = true;
  scene.add(wall_right_02);

  var rot = new THREE.Matrix4();
  var wall_diagonaltop_right = new THREE.Mesh(geometry_wall_diagonal, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  rot.makeRotationY(0.8);
  wall_diagonaltop_right.applyMatrix(rot);
  updateTexture(wall_diagonaltop_right, 'http://localhost:8000/img/txtr_brick_brown_light.jpg', WallSideEnum.right, 8);
  wall_diagonaltop_right.position.y+=(geometry_wall_orthogonal.parameters.height/2);
  wall_diagonaltop_right.position.x+=FLOOR_WIDTH/2-FLOOR_WIDTH/2*(1-WALL_TOP_WIDTH) + 14.5 ;
  wall_diagonaltop_right.position.z-=FLOOR_LENGTH/2 - geometry_wall_parallel.parameters.depth/2 - (FLOOR_LENGTH*0.2)/2 + OFFSET;
  wall_diagonaltop_right.castShadow = true;
  scene.add(wall_diagonaltop_right);

  var wall_diagonaltop_left = new THREE.Mesh(geometry_wall_diagonal, createTextureMaterialsArray('http://localhost:8000/img/txtr_white_wall.jpg', 1));
  rot.makeRotationY(-0.8);
  wall_diagonaltop_left.applyMatrix(rot);
  updateTexture(wall_diagonaltop_left, 'http://localhost:8000/img/txtr_brick_brown_light.jpg', WallSideEnum.left, 8);
  wall_diagonaltop_left.position.y+=(geometry_wall_orthogonal.parameters.height/2);
  wall_diagonaltop_left.position.x-=FLOOR_WIDTH/2-FLOOR_WIDTH/2*(1-WALL_TOP_WIDTH) + 14.5 ;
  wall_diagonaltop_left.position.z-=FLOOR_LENGTH/2 - geometry_wall_parallel.parameters.depth/2 - (FLOOR_LENGTH*0.2)/2 + OFFSET;
  wall_diagonaltop_left.castShadow = true;
  scene.add(wall_diagonaltop_left);
}

function addFloor() {
  var floor = new THREE.Mesh(geometry_floor, createTextureMaterial('http://localhost:8000/img/txtr_floor.jpg', 5));
  scene.add(floor);
}

var livingroom_light;
var bedroom_light;
var bathroom_light;

function addLighting() {
  livingroom_light = new THREE.PointLight(new THREE.Color(1, 1, 1), (1), (150) ,2);
  livingroom_light.position.set(2, 5, 0);
  scene.add(livingroom_light);

  bedroom_light = new THREE.PointLight(new THREE.Color(1, 1, 1), (1), (150) ,2);
  bedroom_light.position.set(-10, 13, 0);
  scene.add(bedroom_light);

  bathroom_light = new THREE.PointLight(new THREE.Color(1, 1, 1), (1), (150) ,2);
  bathroom_light.position.set(-3, 13, 43);
  scene.add(bathroom_light);
}
