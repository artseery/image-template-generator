<template>
  <div :class="$style['main-wrapper']">
    <div :class="$style['main-canvas']">
      <canvas id="canvas"></canvas>
    </div>
    <input type="file" @input="inputImage">
    <tools-panel @createTextElement="createTextElement"/>
    <elements-list :state="state"
                   @removeText="removeText"
                   @updatePosition="updateTextPosition"
                   @updateText="updateTextContent"
                   @updateColor="updateTextColor"
                   @updateFontWeight="updateTextFontWeight"
                   @updateFontStyle="updateTextFontStyle"
    />
  </div>
</template>

<script setup>
import { setupCanvas, loadImage } from "@/modules/imageLoader";
import { createRenderer, removeRenderer } from "@/modules/renderer";
import { createText } from "@/modules/elementFactory"
import { onUnmounted, reactive } from "vue";
import ToolsPanel from '@/components/ToolsPanel.vue';
import ElementsList from '@/components/ElementsList.vue';

const state = reactive({
  texts: {},
})
let image = reactive({
  element: null,
  width: 0,
  height: 0
})
let ctx, canvas

/**
 * Get canvas, setup it and start renderer
 * @param event {Event} - File loader event to get file from input
 * @return {Promise<void>}
 */
async function inputImage(event) {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  image = await loadImage(event.target.files[0])
  await setupCanvas(canvas, image.width, image.height)
  await createRenderer(state, ctx, image)
}

/**
 * Creates new text element
 * @param text {String} - New text value
 */
function createTextElement(text) {
  createText(null, text).then(result => {
    state.texts[result.key] = {
      x: result.x,
      y: result.y,
      text: result.text,
      color: result.color,
      font: result.font,
      fontSize: result.fontSize,
      fontWeight: result.fontWeight,
      fontStyle: result.fontStyle
    }
  })
}

/**
 * Updates text position
 * @param value {Number, String} - New position value
 * @param key {Number} - Text key
 * @param axis {String} - Axis of move
 */
function updateTextPosition(value, key, axis) {
  state.texts[key][axis] = value
}

/**
 * Updates text content
 * @param value {String} - New text content
 * @param key - Text key
 */
function updateTextContent(value, key) {
  state.texts[key].text = value
}

/**
 * Updates text color
 * @param value {String} - New color content
 * @param key - Text key
 */
function updateTextColor(value, key) {
  state.texts[key].color = value
}

/**
 * Updates text weight
 * @param value {String} - New text weight
 * @param key - Text key
 */
function updateTextFontWeight(value, key) {
  state.texts[key].fontWeight = value
}

/**
 * Updates text style
 * @param value {String} - New text style
 * @param key - Text key
 */
function updateTextFontStyle(value, key) {
  state.texts[key].fontStyle = value
}

/**
 * Removes text from canvas
 * @param key {Number} - Text key
 */
function removeText(key) {
  delete state.texts[key]
}

onUnmounted(() => {
  removeRenderer()
})
</script>

<style lang="sass" module>
*
  box-sizing: border-box
  font-family: Roboto, sans-serif

body
  padding: 0
  margin: 0
.main-wrapper
  padding: 0 16px
</style>
