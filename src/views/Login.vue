<template>
  <div class="login">
    <AuthCard title="Login" btnText="ログイン" />
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
.login {
  padding: 120px 100px 0;
}
</style>
