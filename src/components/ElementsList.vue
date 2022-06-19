<template>
  <div :class="$style['elements-list']">
    <div :class="$style['elements-list-texts']">
      <div :class="$style['elements-list-texts-element']">
        <span :class="$style['elements-list-texts-element__key']">Key</span>
        <span :class="$style['elements-list-texts-element__value']">Value</span>
        <span :class="$style['elements-list-texts-element__x']">X</span>
        <span :class="$style['elements-list-texts-element__y']">Y</span>
      </div>
      <div :class="$style['elements-list-texts-element']" v-for="(element, key) in state.texts" :key="key">
        <span :class="$style['elements-list-texts-element__key']">{{ key }}</span>
        <span :class="$style['elements-list-texts-element__value']">{{ element.text }}</span>
        <span :class="$style['elements-list-texts-element__x']">{{ element.x }}</span>
        <span :class="$style['elements-list-texts-element__y']">{{ element.y }}</span>
        <span :class="$style['elements-list-texts-element__remove']" @click="$emit('removeText', key)">Remove</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementsList',
  data() {
    return {

    }
  },
  props: {
    state: {
      type: Object
    }
  }
}

</script>

<style lang="sass" module scoped>
.elements-list
  display: flex
  &-texts
    display: flex
    flex-direction: column
    &-element
      display: flex
      &__key
        width: 40px
      &__value
        width: 150px
      &__x, &__y
        width: 40px
      &__remove
        color: #cb0101
        cursor: pointer
        transition: all .1s ease
        &:hover
          color: #f13d3d
</style>
