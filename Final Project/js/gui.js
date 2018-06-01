var gui;

var old_livingroom_light_intensity = 0;
var old_bathroom_light_intensity = 0;
var old_bedroom_light_intensity = 0;

function buildGui() {
  gui = new dat.GUI();
  var params = {
    cameralight_intensity: cameraLight.intensity,
    livingroom_light: livingroom_light.intensity,
    bedroom_light: bedroom_light.intensity,
    bathroom_light: bathroom_light.intensity,
    turn_off_lights: false
  }
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

  //TODO Add Texture Changer

  gui.open();
}