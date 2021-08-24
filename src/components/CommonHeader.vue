<template>
  <header>
    <div class="header align-items-center flex">
      <div
        id="hamburger"
        @click="openDrawerMenu"
        :class="{ active: drawerFlg }"
        class="header__hamburger"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 class="header__ttl">Rese</h1>
    </div>
    <div v-if="drawerFlg" class="menu" :class="{ active: drawerFlg }">
      <div class="menu__item">
        <router-link
          :to="{ name: 'Home' }"
          @click.native="openDrawerMenu()"
          class="menu__item"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'Mypage' }"
          @click.native="openDrawerMenu()"
          v-if="$store.state.auth"
          class="menu__item"
          >Mypage</router-link
        >
        <router-link
          :to="{ name: 'Registration' }"
          @click.native="openDrawerMenu()"
          v-if="!$store.state.auth"
          class="menu__item"
          >Registration</router-link
        >
        <router-link
          :to="{ name: 'Login' }"
          @click.native="openDrawerMenu()"
          v-if="!$store.state.auth"
          class="menu__item"
          >Login</router-link
        >
        <router-link
          :to="{ name: 'Login' }"
          @click.native="logout()"
          v-if="$store.state.auth"
          class="menu__item"
          >Logout</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawerFlg: false,
    };
  },
  methods: {
    openDrawerMenu() {
      this.drawerFlg = !this.drawerFlg;
    },
    async logout() {
      this.openDrawerMenu();
      await this.$store.dispatch("logoutAction");
    },
  },
};
</script>

<style scoped>
.header {
  position: absolute;
  top: 40px;
  left: 100px;
}

.header__hamburger {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.4s;
  background-color: #305dff;
  border-radius: 5px;
  box-shadow: 2px 2px 4px gray;
  z-index: 20;
}

.header__hamburger span {
  position: absolute;
  left: 10px;
  display: block;
  height: 1px;
  background-color: #fff;
  transition: 0.8s;
}

.header__hamburger span:nth-of-type(1) {
  width: 10px;
  top: 13px;
}

.header__hamburger span:nth-of-type(2) {
  width: 20px;
  top: 20px;
}

.header__hamburger span:nth-of-type(3) {
  width: 5px;
  top: 27px;
}

.header__hamburger.active {
  position: fixed;
}

.header__hamburger.active span:nth-of-type(1) {
  width: 20px;
  top: 20px;
  transform: rotate(45deg);
}

.header__hamburger.active span:nth-of-type(2) {
  opacity: 0;
}

.header__hamburger.active span:nth-of-type(3) {
  width: 20px;
  top: 20px;
  transform: rotate(-45deg);
}

.header__ttl {
  font-size: 32px;
  color: #305dff;
  margin-left: 20px;
}

.menu {
  display: none;
}

.menu.active {
  display: block;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  text-align: center;
  padding-top: 30vh;
}

.menu__item {
  color: #305dff;
  text-decoration: none;
  font-size: 32px;
  display: block;
  margin-bottom: 30px;
}
</style>
