import { drawText } from '@/modules/elementFactory.js';

function clearCanvas(ctx, image) {
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(0, 0, image.width, image.height);
    ctx.drawImage(image.element, 0, 0, image.width, image.height)
}
function drawTexts(ctx, texts) {
    // eslint-disable-next-line no-unused-vars
    for (const [key, text] of Object.entries(texts)) {
        drawText(ctx, text.font, text.text, text.color, text.fontSize, text.x, text.y, text.fontWeight, text.fontStyle)
    }
}

export {
    clearCanvas,
    drawTexts,
}
