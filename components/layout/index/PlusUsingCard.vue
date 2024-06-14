<script setup lang="ts">
defineProps({
  advantage: Object
})
</script>

<template>
  <div class="plus__using__card">
    <img :src="advantage?.img">
    <div>
      <h4>{{ advantage?.title }}</h4>
      <p>{{ advantage?.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables';
.plus__using__card{
  padding: 24px 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  background: #FBFCFD;
  border: 1px solid #EEEFF1;
  border-radius: 8px;

  h4{
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: variables.$text-accent-color;
    margin-bottom: 10px;
  }

  p{
    font-size: 14px;
  }

}
</style>