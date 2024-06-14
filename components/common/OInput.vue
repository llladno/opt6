<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.value === '') {
    target.style.border = '1px solid red'
  } else {
    target.style.border = '1px solid #BCBCBC'
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
};
</script>

<template>
  <div class="input__place">
    <label>
      <slot></slot>
    </label>
    <input @input="updateValue" @focus="updateValue">
  </div>
</template>

<style scoped lang="scss">

</style>