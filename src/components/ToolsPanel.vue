<template>
  <div :class="$style['tools-panel']">
    <div :class="[$style['tools-panel-text'], $style['tools-panel-element']]">
      <input type="text" :class="[$style['tools-panel-text__field'], $style['input']]" v-model="text"/>
      <div :class="[$style['tools-panel-text__button'], $style['button']]" @click="$emit('createTextElement', text)">Добавить</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let text = ref('')
</script>

<style lang="sass" module scoped>
@import "../styles/helpers"

.tools-panel
  display: flex
  flex-direction: column
  padding: 16px 0
  &-element
    display: flex
  &-text
    &__button
      margin-left: 10px
</style>
