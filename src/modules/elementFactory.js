
let key = 0
/**
 * Creates text elements
 * @param font {String} - Font family
 * @param text {String} - Inner text
 * @param fontSize {Number} - Font size
 * @param color {String} - Font color
 * @param x {Number} - Position X
 * @param y {Number} - Position Y
 * @param fontWeight {Number} - Font weight
 * @param fontStyle {String} - Font style
 */
async function createText(font = 'Roboto', text = 'sample text', fontSize = 40, color = '#000', x= 0, y = 20, fontWeight = 400, fontStyle = 'normal') {
    return {
        key: key++, x, y, text, font, fontSize, color, fontWeight, fontStyle
    }
}

/**
 * Draw text on canvas
 * @param ctx {HTMLElement} - Canvas context
 * @param font {String} - Font family
 * @param text {String} - Inner text
 * @param color {String} - Font color
 * @param fontSize {Number} - Font size
 * @param x {Number} - Position X
 * @param y {Number} - Position Y
 * @param fontWeight {Number} - Font weight
 * @param fontStyle {String} - Font style
 */
function drawText(ctx, font, text, color, fontSize, x, y, fontWeight, fontStyle= 'normal') {
    ctx.fillStyle = color
    ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${font}`
    ctx.fillText(`${text}`, x, y)
}

export {
    createText,
    drawText
}
