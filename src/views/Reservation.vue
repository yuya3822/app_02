<template>
  <div class="reservations">
    <ThanksCard text="ご予約ありがとうございます" btnText="戻る" />
  </div>
</template>

<script>
import ThanksCard from "@/components/ThanksCard.vue";
export default {
  components: {
    ThanksCard,
  },
};
</script>

<style>
.reservations {
  padding: 120px 100px 0;
}
</style>
