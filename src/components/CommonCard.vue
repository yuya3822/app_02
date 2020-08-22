<template>
  <div class="flex card-wrapper between wrap">
    <div class="card" v-for="(shop, index) in shops" :key="index">
      <img class="card-img" :src="shop.image_url" alt />
      <div class="card-content">
        <h2 class="card-title">{{ shop.name }}</h2>
        <p class="card-text">#{{ shop.area }}&nbsp;#{{ shop.genre }}</p>
        <div class="flex align-items-center between">
          <button
            @click="
              $router.push({
                path: '/Detail/' + shop.id,
                params: { shop_id: shop.id },
              })
            "
          >
            詳しくみる
          </button>
          <svg
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="width: 32px; height: 32px; opacity: 1;"
            xml:space="preserve"
          >
            <g>
              <path
                class="st0"
                d="M380.63,32.196C302.639,33.698,264.47,88.893,256,139.075c-8.47-50.182-46.638-105.378-124.63-106.879
		C59.462,30.814,0,86.128,0,187.076c0,129.588,146.582,189.45,246.817,286.25c3.489,3.371,2.668,3.284,2.668,3.284
		c1.647,2.031,4.014,3.208,6.504,3.208v0.011c0,0,0.006,0,0.011,0c0,0,0.006,0,0.011,0v-0.011c2.489,0,4.856-1.177,6.503-3.208
		c0,0-0.821,0.086,2.669-3.284C365.418,376.526,512,316.664,512,187.076C512,86.128,452.538,30.814,380.63,32.196z"
                @click="like(shop)"
                :class="shop.like === true ? 'active' : 'inactive'"
                ref="heart"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      shopsData: [],
    };
  },
  props: ["shops"],
  methods: {
    async like(shop) {
      const baseUrl = "https://thawing-refuge-74444.herokuapp.com/api/";
      if (!shop.like) {
        await axios.post(
          baseUrl +
            "like?user_id=" +
            this.$store.state.user.id +
            "&shop_id=" +
            shop.id
        );
      } else {
        await axios.delete(
          baseUrl +
            "like?user_id=" +
            this.$store.state.user.id +
            "&shop_id=" +
            shop.id
        );
      }
      this.$router.go({
        path: this.$router.currentRoute.path,
        force: true,
      });
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  width: calc(100vw - 200px);
}
.card {
  width: 300px;
  height: 280px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 4px gray;
  margin-bottom: 2%;
}
.card-img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 150px;
  max-height: 150px;
  object-fit: cover;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 18px;
  margin-bottom: 10px;
}
.card-text {
  font-size: 12px;
  margin-bottom: 15px;
}
button {
  background: #305dff;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
}
.heart {
  cursor: pointer;
}
path {
  cursor: pointer;
}
path.active {
  fill: red;
}
path.inactive {
  fill: #eee;
}
</style>
