//* Initial setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
    antialias: true,
});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// ---------------------------------------------------------

//* Add an object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0xffcc00 });
const mesh = new THREE.Mesh(geometry, material);

// mesh.position.set(-2, 2, 2);
// mesh.rotation.set(45, 0, 0);
// mesh.scale.set(1, 2, 1);

scene.add(mesh);

const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshLambertMaterial({ color: 0xffcc00 });
const mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.y = 2;
scene.add(mesh2);
// ---------------------------------------------------------

//* Add a light source
const light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

// ---------------------------------------------------------

//* Listen for screen changes
//# Listen for screen resizing
window.addEventListener("resize", (e) => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
});

//# Keep refreshing the screen so as to not loose the aspect ratios of the objects
const render = () => {
    requestAnimationFrame(render);

    //# Animate by changing the roataion, etc. on every frame
    //! you can do this with other properties such as scale, positions, etc. also
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
};

render();

// ---------------------------------------------------------

const tl = new gsap.timeline({ paused: true });
tl.to(mesh.scale, { x: 2, ease: "power1.easeOut", duration: 1 })
    .to(mesh.scale, { x: 0.5, ease: "power1.easeOut", duration: 0.5 })
    .to(mesh.position, { x: 2, ease: "power1.easeOut", duration: 0.5 })
    .to(
        mesh.rotation,
        {
            y: Math.PI * 0.5,
            ease: "power1.easeOut",
            duration: 0.5,
        },
        "-=0.5"
    );

const onMouseMove = (e) => {
    e.preventDefault();

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
    }
};
window.addEventListener("mousemove", onMouseMove);
