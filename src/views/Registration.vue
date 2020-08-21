<template>
  <div class="register">
    <AuthCard title="Registration" btnText="登録" />
  </div>
</template>

<script>
import AuthCard from "@/components/AuthCard.vue";
export default {
  components: {
    AuthCard,
  },
};
</script>

<style scoped>
.register {
  padding: 120px 100px 0;
}
</style>
