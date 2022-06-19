/**
 * Creates canvas with image from file
 * @param file {file} image file from loader
 * @param canvas {HTMLElement} html element
 * @returns {Promise<void>}
 */
export async function createCanvas(file, canvas, ctx) {
    const { image, width, height } = await loadImage(file)
    canvas.width = width
    canvas.height = height
    ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0)
}
function loadImage(file) {
    return new Promise(resolve => {
        const image = new Image()
        image.src = URL.createObjectURL(file)
        image.onload = () => {
            document.body.appendChild(image)
            image.style.display = 'none'
            const {naturalWidth: width, naturalHeight: height} = image

            resolve({image, width, height})
        }
    })
}
