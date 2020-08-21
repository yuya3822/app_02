<template>
  <div class="thanks">
    <ThanksCard text="会員登録ありがとうございます" btnText="ログインする" />
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
.thanks {
  padding: 120px 100px 0;
}
</style>
