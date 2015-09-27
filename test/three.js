var nodejs = true;
var WebGL = require('../index');
var document = WebGL.document();
var THREE = require('../lib/three');

var canvas = document.createElement("threejs-canvas");
var gl = canvas.getContext("experimental-webgl");

var camera = new THREE.PerspectiveCamera( 70, canvas.width / canvas.height, 1, 1000 );
canvas.style = {
	width: canvas.width,
	height: canvas.height
};

camera.position.z = 400;

var scene = new THREE.Scene();

var geometry = new THREE.BoxGeometry( 200, 200, 200 );
var material = new THREE.MeshNormalMaterial();

var mesh = new THREE.Mesh( geometry, material );
mesh.rotation.set(10, 40, 0)
scene.add( mesh );

var renderer = new THREE.WebGLRenderer({ canvas: canvas });

//renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( canvas.width, canvas.height );
render();

function render() {
	renderer.render( scene, camera );
	document.requestAnimationFrame(render);
}
