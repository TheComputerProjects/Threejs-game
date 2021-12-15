var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);

var update = function() {

};

var render = function() {
    renderer.render(scene, camera);
};

var GameLoop = function() {
    requestAnimationFrame(GameLoop);

    update();
    render();
};

GameLoop();