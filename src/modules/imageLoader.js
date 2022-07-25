/**
 * Creates canvas with image from file
 * @param canvas {HTMLElement} - Canvas HTML element
 * @param width {Number} - Width of image
 * @param height {Number} - Height of image
 */
export async function setupCanvas(canvas, width, height) {
    canvas.width = width
    canvas.height = height
}

/**
 * Loads image from file
 * @param file {File} - Image file
 * @return {Promise<unknown>} - Image element, width, height
 */
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
