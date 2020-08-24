<template>
  <div class="register">
    <AuthCard
      title="Registration"
      btnText="登録"
      @getChildData="showChildData"
    />
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
      await axios.post(baseUrl + "register", childData);
      this.$router.push("/thanks");
    },
  },
};
</script>

<style scoped>
.register {
  padding: 120px 100px 0;
}
</style>
