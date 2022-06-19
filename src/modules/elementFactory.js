
let key = 0
/**
 * Creates text elements
 * @param ctx {HTMLElement} ctx - Canvas context
 * @param font {String} font style - Font family
 * @param text {String} text - Inner text
 * @param fontSize {Number} font-size - Font size
 * @param x {Number} position-x - position X
 * @param y {Number} position-y -  position Y
 */
async function createText(ctx, font = 'Roboto', text = 'sample text', fontSize = 40, x= 0, y = 20) {
    ctx.font = `${fontSize}px ${font}`
    ctx.fillText(`${text}`, x, y)
    return {
        key: key++, x, y, text
    }
}

export {
    createText
}
