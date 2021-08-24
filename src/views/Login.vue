<template>
  <div class="main">
    <AuthCard title="Login" btnText="ログイン" @getChildData="login" />
  </div>
</template>

<script>
import AuthCard from "@/components/AuthCard.vue";
export default {
  components: {
    AuthCard,
  },
  methods: {
    async login(childData) {
      await this.$store.dispatch("userAuthAction", childData);
      this.$router.push("/");
    },
  },
};
</script>