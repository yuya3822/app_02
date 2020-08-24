<template>
  <header>
    <div class="header flex align-items-center">
      <div id="hamburger" @click="openDrawerMenu" :class="{ active: drawerFlg }">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1>Rese</h1>
    </div>
    <transition name="right">
      <div v-if="drawerFlg" class="drawer-menu-wrapper">
        <div class="drawer-menu">
          <router-link :to="{ name: 'Home' }" @click.native="openDrawerMenu()">Home</router-link>
          <router-link
            :to="{ name: 'Mypage' }"
            @click.native="openDrawerMenu()"
            v-if="$store.state.auth"
          >Mypage</router-link>
          <router-link
            :to="{ name: 'Registration' }"
            @click.native="openDrawerMenu()"
            v-if="!$store.state.auth"
          >Registration</router-link>
          <router-link
            :to="{ name: 'Login' }"
            @click.native="openDrawerMenu()"
            v-if="!$store.state.auth"
          >Login</router-link>
          <router-link
            :to="{ name: 'Login' }"
            @click.native="logout()"
            v-if="$store.state.auth"
          >Logout</router-link>
        </div>
      </div>
    </transition>
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

.header h1 {
  margin-left: 20px;
  font-size: 32px;
  color: #305dff;
}

#hamburger {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.4s;
  background-color: #305dff;
  border-radius: 5px;
  box-shadow: 2px 2px 4px gray;
  z-index: 20;
}

#hamburger span {
  position: absolute;
  left: 10px;
  display: block;
  height: 1px;
  background-color: #fff;
  transition: 0.8s;
}

#hamburger span:nth-of-type(1) {
  width: 10px;
  top: 13px;
}

#hamburger span:nth-of-type(2) {
  width: 20px;
  top: 20px;
}

#hamburger span:nth-of-type(3) {
  width: 5px;
  top: 27px;
}

.left-enter-active,
.left-leave-active {
  transform: translate(0px, 0px);
}
.left-enter,
.left-leave-to {
  transform: translateX(-100vw) translateX(0px);
}
.drawer-menu-wrapper {
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
.drawer-menu a {
  color: #305dff;
  text-decoration: none;
  font-size: 32px;
  display: block;
  margin-bottom: 30px;
}
#hamburger.active span:nth-of-type(1) {
  width: 20px;
  top: 20px;
  transform: rotate(45deg);
}

#hamburger.active span:nth-of-type(2) {
  opacity: 0;
}

#hamburger.active span:nth-of-type(3) {
  width: 20px;
  top: 20px;
  transform: rotate(-45deg);
}
</style>
