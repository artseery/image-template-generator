<template>
  <div :class="$style['elements-list']">
    <div :class="$style['elements-list-texts']">
      <div :class="$style['elements-list-texts-element']">
        <span :class="$style['elements-list-texts-element__key']">Key</span>
        <span :class="$style['elements-list-texts-element__value']">Value</span>
        <span :class="$style['elements-list-texts-element__x']">X</span>
        <span :class="$style['elements-list-texts-element__y']">Y</span>
        <span :class="$style['elements-list-texts-element__color']">Color</span>
        <span :class="$style['elements-list-texts-element__weight']">Font weight</span>
        <span :class="$style['elements-list-texts-element__style']">Font style</span>
      </div>
      <div :class="$style['elements-list-texts-element']" v-for="(element, key) in props.state.texts" :key="key">
        <span :class="$style['elements-list-texts-element__key']">{{ key }}</span>
        <input :class="[$style['elements-list-texts-element__value'], $style['elements-list__input']]" @input="updateText($event, key)" :value="element.text"/>
        <input :class="[$style['elements-list-texts-element__x'], $style['elements-list__input']]" @input="updatePosition($event, key, 'x')" :value="element.x"/>
        <input :class="[$style['elements-list-texts-element__y'], $style['elements-list__input']]" @input="updatePosition($event, key, 'y')" :value="element.y"/>
        <input :class="[$style['elements-list-texts-element__color'], $style['elements-list__input']]" @input="updateColor($event, key)" :value="element.color"/>
        <input :class="[$style['elements-list-texts-element__weight'], $style['elements-list__input']]" @input="updateFontWeight($event, key)" :value="element.fontWeight"/>
        <select :class="[$style['elements-list-texts-element__style'], $style['elements-list__select']]" @input="updateFontStyle($event, key)" :value="element.fontStyle">
          <option value="normal">normal</option>
          <option value="italic">italic</option>
        </select>
        <span :class="$style['elements-list-texts-element__remove']" @click="$emit('removeText', key)">Remove</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['state'])
const emit = defineEmits(['updatePosition', 'updateText', 'updateColor', 'removeText', 'updateFontWeight', 'updateFontStyle'])

/**
 * Call to update position of text
 * @param event {Event} - Input event
 * @param key {Number} - Text key
 * @param axis {String} - Axis of move
 */
function updatePosition(event, key, axis) {
  emit('updatePosition', event.target.value, key, axis)
}

/**
 * Call to update text content
 * @param event {Event} - Input event
 * @param key {Number} - Text key
 */
function updateText(event, key) {
  emit('updateText', event.target.value, key)
}

/**
 * Call to update text color
 * @param event {Event} - Input event
 * @param key {Number} - Text key
 */
function updateColor(event, key) {
  emit('updateColor', event.target.value, key)
}

/**
 * Call to update text weight
 * @param event {Event} - Input event
 * @param key {Number} - Text key
 */
function updateFontWeight(event, key) {
  emit('updateFontWeight', event.target.value, key)
}

/**
 * Call to update text style
 * @param event
 * @param key
 */
function updateFontStyle(event, key) {
  emit('updateFontStyle', event.target.value, key)
}
</script>

<style lang="sass" module scoped>
.elements-list
  display: flex
  &__input
    border: 1px solid black
    border-radius: 6px
    padding: 4px 6px
  &-texts
    display: flex
    flex-direction: column
    &-element
      display: flex
      align-items: center
      &__key
        width: 40px
      &__value
        width: 150px
      &__x, &__y
        width: 40px
        display: flex
        justify-content: center
      &__color
        width: 100px
      &__weight
        width: 100px
      &__style
        width: 100px
      &__remove
        color: #cb0101
        cursor: pointer
        transition: all .1s ease
        &:hover
          color: #f13d3d
</style>
