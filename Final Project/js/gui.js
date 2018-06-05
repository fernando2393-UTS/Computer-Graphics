var gui;

var old_livingroom_light_intensity = 0;
var old_bathroom_light_intensity = 0;
var old_bedroom_light_intensity = 0;

var FizzyText = function () {
  this.cameralight_intensity = cameraLight.intensity;
  this.livingroom_light = livingroom_light.intensity;
  this.bedroom_light = bedroom_light.intensity;
  this.bathroom_light = bathroom_light.intensity;
  this.turn_off_lights = false;
  this.floor_texture = 'http://localhost:8000/img/txtr_floor.jpg';
  this.wall_texture = 'http://localhost:8000/img/txtr_brick_brown.jpg';
  this.camera = 0
};

function buildGui() {
  var params = new FizzyText();
  gui = new dat.GUI();
  gui.add(params, 'cameralight_intensity', 0, 3).onChange(function (val) {
    cameraLight.intensity = val;
  });
  gui.add(params, 'livingroom_light', 0, 3).onChange(function (val) {
    livingroom_light.intensity = val;
  });
  gui.add(params, 'bedroom_light', 0, 3).onChange(function (val) {
    bedroom_light.intensity = val;
  });
  gui.add(params, 'bathroom_light', 0, 3).onChange(function (val) {
    bathroom_light.intensity = val;
  });
  gui.add(params, 'turn_off_lights', 0, 3).onChange(function (val) {
    if (val) {
      old_livingroom_light_intensity = livingroom_light.intensity;
      old_bathroom_light_intensity = bathroom_light.intensity;
      old_bedroom_light_intensity = bedroom_light.intensity;
      livingroom_light.intensity = 0.0;
      bathroom_light.intensity = 0.0;
      bedroom_light.intensity = 0.0;
    } else {
      livingroom_light.intensity = old_livingroom_light_intensity;
      bathroom_light.intensity = old_bathroom_light_intensity;
      bedroom_light.intensity = old_bedroom_light_intensity;
    }
  });
  gui.add(params, 'floor_texture', {
    'Darkbrown Wood': 'http://localhost:8000/img/txtr_floor.jpg',
    'Brown Wood': 'http://localhost:8000/img/txtr_wood2.jpg',
    'Grey Wood': 'http://localhost:8000/img/txtr_wood1.jpg',
    'Stone Floor': 'http://localhost:8000/img/txtr_floor_stone.jpg'
  }).onChange(function (val) {
    updateTexture(floor, val, WallSideEnum.top, 10);
  });
  gui.add(params, 'wall_texture', {
    'Brown Bricks': 'http://localhost:8000/img/txtr_brick_brown.jpg',
    'Sand Wall': 'http://localhost:8000/img/txtr_wall_sand.jpg',
    'Stone Wall': 'http://localhost:8000/img/txtr_stone.png',
    'Stone Wall 2': 'http://localhost:8000/img/txtr_stone.jpg',
    'Wooden Wall': 'http://localhost:8000/img/txtr_wood_brown.jpg'
  }).onChange(function (val) {
    updateTexture(wall_bottom_out, val, WallSideEnum.front, 8);
    updateTexture(wall_top_out, val, WallSideEnum.back, 8);
    updateTexture(wall_left_out, val, WallSideEnum.left, 8);
    updateTexture(wall_right_out, val, WallSideEnum.right, 8);
    updateTexture(wall_diagonaltop_right, val, WallSideEnum.right, 8);
    updateTexture(wall_diagonaltop_left, val, WallSideEnum.left, 8);
  });
  gui.add(params, 'camera', {
    'Moving Camera': 0,
    'Orbit Camera': 1
  }).onChange(function (val) {
    scene.remove(cameraLight);
    scene.remove(ambientlight);
    scene.remove(camera);
    if (val == 0) {
      addMovingCamera();
    }
    if (val == 1) {
      scene.remove(controls.getObject());
      addOrbitCamera();
    }
  });
  gui.open();
}