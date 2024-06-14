<script setup lang="ts">
import OButton from "~/components/common/OButton.vue";

defineProps({
  documentData: Object
})
</script>

<template>
<div class="documents__slider__card">
  <div>
    <h3>{{ documentData?.title }}</h3>
    <p>{{ documentData?.description }}</p>
  </div>
  <NuxtLink :to="'documents/document-' + documentData?.id"><OButton>Перейти</OButton></NuxtLink>
</div>
</template>

<style scoped lang="scss">
@use '@/assets/variables';
.documents__slider__card{
  padding: 25px;
  min-width: 340px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 0px #0000001F;
  border-radius: 10px;
  transition: 0.2s;

  &:hover{
    scale: 1.01;
  }

  h3{
    font-size: 31px;
    font-weight: 700;
    margin-bottom: 15px;
    color: variables.$text-accent-color
  }

  p{
    font-size: 18px;
    font-weight: 400;
  }

  button{
    width: 100%;
  }


}
</style>