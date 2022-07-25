<template>
  <div :class="$style['main-wrapper']">
    <div :class="$style['main-canvas']">
      <canvas id="canvas"></canvas>
    </div>
    <input type="file" @input="inputImage">
    <tools-panel @createTextElement="createTextElement"/>
    <elements-list :state="state" @removeText="removeText"/>
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

async function inputImage(event) {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  image = await loadImage(event.target.files[0])
  await setupCanvas(canvas, image.width, image.height)
  await createRenderer(state, ctx, image)
}
function createTextElement(text) {
  createText(null, text).then(result => {
    state.texts[result.key] = {
      x: result.x,
      y: result.y,
      text: result.text,
      color: result.color,
      font: result.font,
      fontSize: result.fontSize
    }
  })
}
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
