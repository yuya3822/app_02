<template>
  <div class="card">
    <p class="text">{{ text }}</p>
    <button>{{ btnText }}</button>
  </div>
</template>
  
<script>
export default {
  props: ["text", "btnText"],
};
</script>

<style scoped>
.card {
  background: #ffffff;
  width: 450px;
  text-align: center;
  border-radius: 5px;
  margin-top: 100px;
  box-shadow: 2px 2px 4px gray;
  padding: 100px 0;
}
.text {
  font-size: 24px;
  padding-bottom: 48px;
}
button {
  background: #305dff;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  outline: none;
}
</style>
