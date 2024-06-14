<script setup lang="ts">
const popup = ref(false)
const showFormNotification = ref({status: false, text: 'Форма успешно отрпавлена!'})

const popupChange = () => {
  popup.value = !popup.value
}

function submitForm(text: string) {
  showFormNotification.value.text = text
  showFormNotification.value.status = true
  setTimeout(() => showFormNotification.value.status = false, 3000)
}
</script>

<template>
  <div>
    <LayoutIndexStartForm @popupChange="popupChange"  @submitForm="submitForm"/>
    <LayoutIndexPlusUsing />
    <LayoutIndexDocuments />
    <LayoutPopup v-if="popup" @popupChange="popupChange"/>
    <LayoutNotification v-if="showFormNotification.status">{{ showFormNotification.text }}</LayoutNotification>
  </div>
</template>

<style scoped lang="scss">

</style>