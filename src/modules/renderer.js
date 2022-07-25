import { drawTexts } from '@/modules/helpers.js';
import { clearCanvas } from '@/modules/helpers.js';

let animationFrame

function createRenderer(state, ctx, image) {
    render(state, ctx, image);
}
function render(state, ctx, image) {
    clearCanvas(ctx, image)
    drawTexts(ctx, state.texts)

    animationFrame = window.requestAnimationFrame(function () {
        render(state, ctx, image)
    })
}
function removeRenderer() {
    window.cancelAnimationFrame(animationFrame)
}

export {
    createRenderer, removeRenderer
}
