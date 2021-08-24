<template>
  <div class="main">
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
      const baseUrl = "https://desolate-journey-37709.herokuapp.com/api/v1/";
      await axios.post(baseUrl + "users/registration", childData);
      this.$router.push("/thanks");
    },
  },
};
</script>