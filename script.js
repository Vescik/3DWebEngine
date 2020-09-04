

const scene = new THREE.Scene();
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const  camera = new THREE.PerspectiveCamera(24,window.innerWidth / window.innerHeight, 0.1, 1000);
const setControls = new THREE.OrbitControls( camera, renderer.domElement );

setControls.update();




const  colorYellow = new THREE.Color('hsl(40, 100%, 60%)');
const  colorPink = new THREE.Color('hsl(306, 100%, 60%)');
const  colorLight = new THREE.Color('hsl(40, 100%, 95%)');
scene.background = colorLight;
const cubeGeometry = new THREE.BoxGeometry();

const cubeMaterial = new THREE.MeshPhongMaterial({
    color:colorYellow,
    shininess:80,
});
const cubeTexture = new THREE.LineBasicMaterial( {color:0x0000ff} );
const  cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
const cubeLines = new THREE.Mesh(cubeGeometry,cubeTexture);


const light = new THREE.PointLight(colorPink,2);
const light2 = new THREE.PointLight(colorLight,2);


light.position.set(-40,-20,20);
light2.position.set(10,20,40);


scene.add(light);
scene.add(light2);
scene.add(cube);


camera.position.z = 15;

cube.rotation.x = 20;
cube.rotation.z = 20;

const  animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += .010;
    cube.rotation.z += .010;
    cubeLines.rotation.x += .010;
    cubeLines.rotation.z += .010;
    renderer.render(scene, camera);
};
animate();




