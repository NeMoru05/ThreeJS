import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { ArcballControls } from 'three/addons/controls/ArcballControls.js'; // Correct the import path

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up the camera position
camera.position.z = 5;

// Initialize ArchballControls
const archBallControls = new ArcballControls(camera, renderer.domElement); // Correct the class name

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

    // Start rendering the scene with controls
    const animate = () => {
        requestAnimationFrame(animate);

        // Update ArchBall controls
        archBallControls.update();

        // Render the scene
        renderer.render(scene, camera);
    };
    animate();
});