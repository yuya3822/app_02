<template>
  <div class="thanks-card">
    <p class="thanks-card__txt">{{ text }}</p>
    <a class="thanks-card__link" @click="transition">{{ btnText }}</a>
  </div>
</template>

<script>
export default {
  props: ["text", "btnText"],
  methods: {
    transition() {
      if (this.$route.name == "Thanks") {
        this.$router.push("/login");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.thanks {
  padding: 120px 100px 0;
}

.thanks-card {
  background: #ffffff;
  width: 450px;
  text-align: center;
  border-radius: 5px;
  margin-top: 100px;
  box-shadow: 2px 2px 4px gray;
  padding: 100px 0;
  margin: 0 auto;
}

.thanks-card__txt {
  font-size: 24px;
  padding-bottom: 48px;
}

.thanks-card__link {
  background: #305dff;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  text-decoration: none;
}
</style>
