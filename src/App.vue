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
import { createCanvas } from "@/modules/imageLoader";
import { createRenderer, removeRenderer } from "@/modules/renderer";
import { createText } from "@/modules/elementFactory"
import { onUnmounted, reactive } from "vue";
import ToolsPanel from '@/components/ToolsPanel.vue';
import ElementsList from '@/components/ElementsList.vue';

const state = reactive({
  texts: {},
})
let ctx, canvas

async function inputImage(event) {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  await createCanvas(event.target.files[0],  canvas, ctx)
  await createRenderer()
}
function createTextElement(text) {
  createText(ctx, null, text).then(result => {
    state.texts[result.key] = {
      x: result.x,
      y: result.y,
      text: result.text,
    }
  })
}
function removeText(key) {
  console.log(state.texts[key])
  state.texts[key] = null
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
</style>
