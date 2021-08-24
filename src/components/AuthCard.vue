<template>
  <form class="auth-card" @submit.prevent="sendParent">
    <div class="auth-card__ttl">{{ title }}</div>
    <div class="input-container">
      <div class="auth-card__item" v-if="title == 'Registration'">
        <img
          class="auth-card__item__img"
          src="../assets/username.png"
          alt="username-icon"
          width="25px"
        />
        <input
          class="auth-card__item__input"
          type="text"
          placeholder="Username"
          v-model="username"
        />
      </div>
      <div class="auth-card__item">
        <img
          class="auth-card__item__img"
          src="../assets/email.png"
          alt="email-icon"
          width="25px"
        />
        <input
          class="auth-card__item__input"
          type="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="auth-card__item">
        <img
          class="auth-card__item__img"
          src="../assets/password.png"
          alt="password-icon"
          width="25px"
        />
        <input
          class="auth-card__item__input"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
    </div>
    <div class="auth-card__btn">
      <input type="submit" :value="btnText" />
    </div>
  </form>
</template>

<script>
export default {
  props: ["title", "btnText"],
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    sendParent() {
      const data = {
        email: this.email,
        password: this.password,
      };
      if (this.username != "") {
        data.name = this.username;
      }
      this.$emit("getChildData", data);
    },
  },
};
</script>

<style scoped>
.auth-card {
  background: #ffffff;
  width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  padding-bottom: 20px;
  margin-top: 100px;
  box-shadow: 2px 2px 4px gray;
}

.auth-card__ttl {
  background: #305dff;
  border-radius: 5px 5px 0 0;
  color: #ffffff;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  font-size: 18px;
}

.auth-card__item {
  text-align: center;
  margin-top: 20px;
}

.auth-card__item__img {
  vertical-align: middle;
  margin-right: 10px;
}

.auth-card__item__input {
  width: 300px;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
}

.auth-card__btn {
  text-align: right;
  margin: 15px 30px 0 0;
}

.auth-card__btn input {
  background: #305dff;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  outline: none;
}
</style>
