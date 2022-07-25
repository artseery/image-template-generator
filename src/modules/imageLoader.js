/**
 * Creates canvas with image from file
 * @param canvas {HTMLElement}
 * @param width {Number}
 * @param height {Number}
 * @return ctx
 */
export async function setupCanvas(canvas, width, height) {
    canvas.width = width
    canvas.height = height
}
export function loadImage(file) {
    return new Promise(resolve => {
        const image = new Image()
        image.src = URL.createObjectURL(file)
        image.onload = () => {
            document.body.appendChild(image)
            image.style.display = 'none'
            const {naturalWidth: width, naturalHeight: height} = image

            resolve({element: image, width, height})
        }
    })
}
