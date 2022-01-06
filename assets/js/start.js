export function Start(){
        var canvas = document.getElementById('canvas')
    var scene = new THREE.Scene()

    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    )
    camera.position.z = 3.06
    camera.position.y = 1.0



    const Hemisphere = new THREE.HemisphereLight(
        0xFFFFBB,
        0xFFFFFF,
        20
    )

    scene.add(Hemisphere)


    var renderer = new THREE.WebGLRenderer({canvas: canvas})
    
    renderer.setSize(
        canvas.width * 2,
        canvas.height * 2
    )

    // document.body.appendChild(
    //     renderer.domElement
    // );


    const x3 = new THREEx3({
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene
    },{
        grid: {visible: false},
        axes: {visible: false}
    })
    x3.add(Hemisphere, {label: 'Luz'})
    x3.add(camera, {label: 'camera'})
    x3.add(scene, {label: 'scene'})


    return {
        scene,
        camera,
        // x3,
        Hemisphere,
        renderer
    }
}