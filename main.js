import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GTFLoader.js' //Loader settings
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up the camera position
camera.position.z = 5; // Move the camera back along the Z-axis

// Load the glTF model using the GLTFLoader
const loader = new GLTFLoader();
loader.load('denah-clinik.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Set up lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Start rendering the scene
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();
});
