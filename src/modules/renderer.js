let animationFrame

function createRenderer() {
    animationFrame = window.requestAnimationFrame(render)
}
function render() {
    animationFrame = window.requestAnimationFrame(render)
}
function removeRenderer() {
    window.cancelAnimationFrame(animationFrame)
}

export {
    createRenderer, removeRenderer
}
