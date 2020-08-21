<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <div class="input-container">
      <div class="input" v-if="title == 'Registration'">
        <img src="../assets/username.png" alt="" width="25px" />
        <input type="text" placeholder="Username" />
      </div>
      <div class="input">
        <img src="../assets/email.png" alt="" width="25px" />
        <input type="email" placeholder="Email" />
      </div>
      <div class="input">
        <img src="../assets/password.png" alt="" width="25px" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
    <div class="button">
      <button>{{ btnText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "btnText"],
};
</script>

<style scoped>
.card {
  background: #ffffff;
  width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  padding-bottom: 20px;
  margin-top: 100px;
  box-shadow: 2px 2px 4px gray;
}
.card .title {
  background: #305dff;
  border-radius: 5px 5px 0 0;
  color: #ffffff;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  font-size: 18px;
}
.input-container {
  text-align: center;
  margin: 25px;
}
.input {
  margin-top: 20px;
}
.input img {
  vertical-align: middle;
  margin-right: 10px;
}
.input input {
  width: 300px;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
}
.button {
  text-align: right;
  margin-right: 30px;
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
