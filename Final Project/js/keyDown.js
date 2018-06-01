document.onkeydown = function (evt) {
    if (evt.keyCode == 65) { // Pressing key A
        camera.position.x -= 3;
    }
    if (evt.keyCode == 68) { // Pressing key D
        camera.position.x += 3;
    }
    if (evt.keyCode == 87) { // Pressing key W
        camera.position.z -= 3;
    }
    if (evt.keyCode == 83) { // Pressing key S
        camera.position.z += 3;
    }
    if (evt.keyCode == 27) { // Pressing ESC
        if (selected_obj) {
            selected_obj.material.color = selected_obj_color;
            selected_obj = null;
        }
    }
};