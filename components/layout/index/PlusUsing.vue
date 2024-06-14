<script setup lang="ts">
import svgImg1 from "~/assets/icons/Frame.svg";
import svgImg2 from "~/assets/icons/Group.svg";
import svgImg3 from "~/assets/icons/Frame-1.svg";
import svgImg4 from "~/assets/icons/Frame-4.svg";
import svgImg5 from "~/assets/icons/Frame-3.svg";
import svgImg6 from "~/assets/icons/Frame-2.svg";

const advantagesData = [
  {
    title: 'Неограниченый автопарк',
    description: 'Можно добавить неограниченное кол-во машин и водителей',
    img: svgImg1
  },
  {
    title: 'Сокращение затрат до 50%',
    description: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке',
    img: svgImg2
  },
  {
    title: 'Безопасность',
    description: 'Данные передаются в зашифрованном виде, они доступны только получателю',
    img: svgImg3
  },
  {
    title: 'Уведомление о погашении',
    description: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП',
    img: svgImg4
  },
  {
    title: 'Квитанция об оплате',
    description: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.',
    img: svgImg5
  },
  {
    title: 'Все история сохраняется по каждой машине',
    description: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам',
    img: svgImg6
  }

]
</script>

<template>
  <h2>Плюсы использования сервиса "Компас" для анализа штрафов</h2>
  <div class="plus__using">
    <LayoutIndexPlusUsingCard v-for="(advantage, index) in advantagesData" :key="index" :advantage="advantage" />
  </div>
</template>

<style scoped lang="scss">
h2{
  text-align: center;
  margin: 98px 0 33px 0;
}

.plus__using{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 35px;
}

</style>