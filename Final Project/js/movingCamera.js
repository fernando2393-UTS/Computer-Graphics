var controlsEnabled = true;
var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;

var prevTime = performance.now();
var velocity = new THREE.Vector3();
var direction = new THREE.Vector3();
var vertex = new THREE.Vector3();
var color = new THREE.Color();

function addMovingCamera() {
    // instructions.addEventListener('click', function (event) {
    //     instructions.style.display = 'none';
    //     element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
    //     element.requestPointerLock();
    // }, false);
    
    var ratio = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 2000);
    var ambientlight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 0.2);
    scene.add(ambientlight);
    cameraLight = new THREE.PointLight(new THREE.Color(1, 1, 1), 0.8);
    camera.add(cameraLight);
    scene.add(camera);
    controls = new THREE.PointerLockControls(camera);
    controls.enabled = true;
    scene.add(controls.getObject());
}

function animate() {
    requestAnimationFrame(animate);
    if (controlsEnabled == true) {
        var time = performance.now();
        var delta = (time - prevTime) / 1000;
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        // velocity.y = 0;
        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveLeft) - Number(moveRight);
        direction.normalize();
        if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;
        controls.getObject().translateX(velocity.x * delta);
        controls.getObject().translateY(velocity.y * delta);
        controls.getObject().translateZ(velocity.z * delta);
        prevTime = time;
    }
    renderer.render(scene, camera);

}