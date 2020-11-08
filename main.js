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
    camera.position.set(200, 100, 1000); 

    const light = new THREE.HemisphereLight(0xB1E1FF, 0xB97A20, 1);
    scene.add(light);

    //const controls = new OrbitControls(camera, canvas);
    //controls.target.set(0, 5, 0);
    //controls.update(); 
    
    const cubeSize = 100;
    const cubeColor = {
        green: '#00ff00',
        red: '#f21b3b',
        blue: '#1905f5',
        yellow: '#f0ec18',
        orange: '#f0ec18',
        grey: '#8AC',
    }


    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize, 12);
    const material = new THREE.MeshBasicMaterial({color: cubeColor.green, wireframe: false});
    const mesh = new THREE.Mesh(geometry, material);
    
    const cubeGeo = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMat = new THREE.MeshPhongMaterial({color: cubeColor.grey, wireframe: false});
    const mesh2 = new THREE.Mesh(cubeGeo, cubeMat);
    mesh2.position.set(100, 0, 0);

    const cubeMat3 = new THREE.MeshPhongMaterial({color: cubeColor.red, wireframe: false});
    const mesh3 = new THREE.Mesh(cubeGeo, cubeMat3);
    mesh3.position.set(200, 0, 0);

    const cubeMat4 = new THREE.MeshPhongMaterial({color: cubeColor.blue, wireframe: false});
    const mesh4 = new THREE.Mesh(cubeGeo, cubeMat4);
    mesh4.position.set(300, 0, 0);
      
    const cubeMat5 = new THREE.MeshPhongMaterial({color: cubeColor.yellow, wireframe: false});
    const mesh5 = new THREE.Mesh(cubeGeo, cubeMat5);
    mesh5.position.set(400, 0, 0);

    const cubeMat6 = new THREE.MeshPhongMaterial({color: cubeColor.orange, wireframe: false});
    const mesh6 = new THREE.Mesh(cubeGeo, cubeMat6);
    mesh6.position.set(500, 0, 0);

    const cubeMat7 = new THREE.MeshPhongMaterial({color: cubeColor.red, wireframe: false});
    const mesh7 = new THREE.Mesh(cubeGeo, cubeMat7);
    mesh7.position.set(100, 100, 0);

    const cubeMat8 = new THREE.MeshPhongMaterial({color: cubeColor.orange, wireframe: false});
    const mesh8 = new THREE.Mesh(cubeGeo, cubeMat8);
    mesh8.position.set(200, 100, 0);

    const cubeMat9 = new THREE.MeshPhongMaterial({color: cubeColor.green, wireframe: false});
    const mesh9 = new THREE.Mesh(cubeGeo, cubeMat9);
    mesh9.position.set(300, 100, 0);

    const cubeMat10 = new THREE.MeshPhongMaterial({color: cubeColor.blue, wireframe: false});
    const mesh10 = new THREE.Mesh(cubeGeo, cubeMat10);
    mesh10.position.set(400, 100, 0);

    const cubeMat11 = new THREE.MeshPhongMaterial({color: cubeColor.blue, wireframe: false});
    const mesh11 = new THREE.Mesh(cubeGeo, cubeMat11);
    mesh11.position.set(300, 200, 0);

    const cubeMat12 = new THREE.MeshPhongMaterial({color: cubeColor.red, wireframe: false});
    const mesh12 = new THREE.Mesh(cubeGeo, cubeMat12);
    mesh12.position.set(200, 200, 0);

    const cubeMat13 = new THREE.MeshPhongMaterial({color: cubeColor.green, wireframe: false});
    const mesh13 = new THREE.Mesh(cubeGeo, cubeMat13);
    mesh13.position.set(250, 300, 0);
    
    scene.add(mesh, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13);
    
    renderer.render(scene, camera);


    // function loop() {
    //     mesh.rotation.y += Math.PI / 500;
    //     mesh2.rotation.y += Math.PI / 500;
    //     renderer.render(scene, camera);

    //     requestAnimationFrame(() => loop());
    // }

    //loop();
}