<script setup lang="ts">
import DocunentsCard from "~/components/layout/index/DocunentsCard.vue";
import ovalImg from "@/assets/icons/oval.svg";
import Api from "~/api/api";




const documents__slider = ref(null)
const documents = ref(Api.documents)
const position = ref(0)
const maxPosition = ref(380)

onMounted(() => {
  window.onresize = ((e) => {
    e.preventDefault()
    position.value = 0
    if (documents__slider.value) {
      const slider = documents__slider.value as HTMLDivElement
      slider.style.left = '0px'
    }
  })

})


function slide(action: string) {
  action === '+' ? position.value = position.value + 380 : position.value = position.value - 380

  if (documents__slider.value.offsetWidth == 760) {
    maxPosition.value = 380 * 2
  } else if (documents__slider.value.offsetWidth == 365) {
    maxPosition.value = 380 * 3
  } else {
    maxPosition.value = 380
  }
  if (documents__slider.value) {
    const slider = documents__slider.value as HTMLDivElement
    slider.style.left = position.value + 'px'
  }
}

</script>

<template>
  <h2>Документы</h2>

  <div class="documents-center">
    <div class="documents">
      <button class="documents__button-left" :disabled="position >= 0" @click="()=> slide('+')"><img :src="ovalImg"/>
      </button>
      <div class="documents__slider" ref="documents__slider">
        <DocunentsCard v-for="document in documents" :key="document.title" :documentData="document">
        </DocunentsCard>
      </div>
      <button class="documents__button-right" :disabled="position <= -maxPosition" @click="()=> slide('-')"><img
          :src="ovalImg"/></button>
    </div>
    <div class="documents__status">
      <div :class="[position >= 0 ? 'documents__status__active' : 'documents__status__default']"></div>
      <div :class="[position < 0 ? 'documents__status__active' : 'documents__status__default']"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables';

h2 {
  margin-top: 85px;
  text-align: center;
}

.documents-center {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 473px;
}

.documents__status {
  display: flex;
}

.documents__status__default {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background: #D9D9D9;
}

.documents__status__active {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background: #D9D9D9;
  background: variables.$primary-color;
}

.documents {
  width: 1135px;
  padding: 20px 0;
  margin-top: 20px;
  position: relative;
  overflow: hidden;

  &__slider {
    width: 100%;
    margin: 0 22px;
    display: flex;
    position: relative;
    left: 1px;
    gap: 35px;
    transition: 0.3s;
  }

  button {
    position: absolute;
    z-index: 10;
    top: 50%;
    height: 80px;
    width: 40px;
    border: none;
    background: none;

    &:hover {
      img {
        opacity: 0.8;
      }

    }

    &.documents__button-left {
      left: 0;
    }

    &.documents__button-right {
      right: 0;
      rotate: (180deg);
    }
  }


  @media (max-width: 1200px) {
    & {
      max-width: 760px;
    }
  }
  @media (max-width: 800px) {
    & {
      max-width: 365px;
    }

  }
}


</style>