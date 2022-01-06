export function Render(start) {
    function animate() {
        
        // start.x3.tick()

        // start.x3.fps(() => {
        //     start.renderer.render(start.scene, start.camera)
        // })

        requestAnimationFrame(animate);
        start.renderer.render(start.scene, start.camera);
    };
    animate()
};