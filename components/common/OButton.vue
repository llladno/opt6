<script setup lang="ts">
defineProps({
  propClass: String
})
</script>

<template>
  <button :class="[propClass ? propClass : 'default']" >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button{}
</style>