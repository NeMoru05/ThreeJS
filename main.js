import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js' // Correct the import path

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x000000, 0);

// Set up the camera position
camera.position.z = 5;

// Initialize OrbitControls
const orbitControls = new OrbitControls(camera, renderer.domElement); 

// Load the glTF model using the GLTFLoader
const loader = new GLTFLoader();
loader.load('model.gltf', (gltf) => {
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

        // Update OrbitControls
        orbitControls.update();

        // Render the scene
        renderer.render(scene, camera);
    };
    animate();
});
