function addOrbitCamera() {
    instructions.style.display = 'none';
    var ratio = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 2000);
    camera.position.set(60, 25, 60);
    cameraLight = new THREE.PointLight(new THREE.Color(1, 1, 1), (0.2));
    camera.add(cameraLight);
    scene.add(camera);
    controls = new THREE.OrbitControls(camera);
}