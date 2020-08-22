<template>
  <div class="login">
    <AuthCard title="Login" btnText="ログイン" @getChildData="showChildData" />
  </div>
</template>

<script>
import axios from "axios";
import AuthCard from "@/components/AuthCard.vue";
export default {
  components: {
    AuthCard,
  },
  methods: {
    async showChildData(childData) {
      const baseUrl = "https://thawing-refuge-74444.herokuapp.com/api/";
      await axios.post(baseUrl + "login", childData);
      await this.$store.dispatch("getUserAuthAction", childData);
      await this.$store.dispatch("getUserDataAction", childData.email);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login {
  padding: 120px 100px 0;
}
</style>
