import { Start } from './start.js'
import { GLTFLoader } from './GLTFLoader.js'
import { Render } from './render.js'

const start = Start()


var loader = new GLTFLoader();
var obj;
loader.load('../../models/samsung_phone/scene.gltf', function(gltf){
    obj = gltf.scene
    start.scene.add(gltf.scene)
    // start.x3.add(gltf.scene)
    gltf.scene.position.y = 1.0
})

Render(start)