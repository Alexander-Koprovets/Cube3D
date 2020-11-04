window.onload = function() {
    const input = document.getElementById('size');
    input.addEventListener('change', function() {
        this.value;
    })
    
    const width = window.innerWidth;
    const height = window.innerHeight - 50;

    const canvas = document.getElementById('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    const renderer = new THREE.WebGLRenderer({canvas: canvas}); 
    renderer.setClearColor(0x000000); 

    const scene = new THREE.Scene(); 

    const camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 5000);
    camera.position.set(0, 0, 1000); 

    const light = new THREE.HemisphereLight(0xB1E1FF, 0xB97A20, 1);
    scene.add(light);

    //const controls = new OrbitControls(camera, canvas);
    //controls.target.set(0, 5, 0);
    //controls.update(); 

    const geometry = new THREE.BoxGeometry(200, 200, 200, 12);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: false});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh); 
    
    const cubeGeo = new THREE.BoxBufferGeometry(200, 200, 200);
    const cubeMat = new THREE.MeshPhongMaterial({color: '#8AC', wireframe: false});
    const mesh2 = new THREE.Mesh(cubeGeo, cubeMat);
    mesh2.position.set(400, 200, 0);
    scene.add(mesh2);
      
    function loop() {
        mesh.rotation.y += Math.PI / 500;
        mesh2.rotation.y += Math.PI / 500;
        renderer.render(scene, camera);

        requestAnimationFrame(() => loop());
    }

    loop();
}