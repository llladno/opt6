<script setup lang="ts">
import startImg from '@/assets/img/start.png'
import arrow from '@/assets/icons/Path-12.svg'
import youTube from '@/assets/icons/YOUTUBE.svg'

const emit = defineEmits(['popupChange', 'submitForm'])
const data = ref({
  number: '',
  region: '',
  ts: ''
})
function handleSubmit(e: FormDataEvent){
  e.preventDefault()
  if (!data.value.number || !data.value.region || !data.value.ts) {
    emit('submitForm', 'Заполните все поля!')
  } else emit('submitForm', 'Форма успешно отрпавлена!')
}
</script>f

<template>
  <div class="title__form">
    <form @submit="handleSubmit">
      <h2>Проверьте штрафы и зарегестрируйтесь в 1 клик</h2>
      <div class="title__form__grid">
        <CommonOInput v-model="data.number" class="title__form__grid-number">Номер автомобиля</CommonOInput>
        <CommonOInput v-model="data.region" class="title__form__grid-region">Регион</CommonOInput>
        <CommonOInput v-model="data.ts" class="title__form__grid-sertificate">Свидетельство о регистрации ТС</CommonOInput>
      </div>
      <div class="title__form__buttons">
        <CommonOButton type='submit'>Проверить штрафы <img :src='arrow'></CommonOButton>
        <CommonOButton @click='()=> $emit("popupChange")' propClass="secondary"><img :src='youTube'> О сервисе <span>(1 мин. 20 сек)</span></CommonOButton>
      </div>
      <p class="ps">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</p>
    </form>
    <div class="title__form__img">
      <img :src='startImg'>
    </div>
  </div>

</template>

<style scoped lang="scss">

.title__form{
  margin-top: 79px;
  display: flex;
  gap: 40px;
  h2{
    font-size: 41px;
    line-height: 49.2px;
  }



  &__buttons{
    margin: 16px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 21px;
  }


  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;

    .title__form__img{
      img{
        width: 100%;
      }
    }
  }
}

.title__form__grid {
  margin-top: 25px;
  display: grid;
  column-gap: 30px;
  row-gap: 16px;

  &-number {
    grid-column: 1 / 3;
  }

  &-region {
    grid-column: 3 / 4;
  }

  &-sertificate {
    grid-column: 1 / 4;
  }

}
</style>