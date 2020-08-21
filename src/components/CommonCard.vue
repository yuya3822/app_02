<template>
  <div class="flex card-wrapper between wrap">
    <div class="card" v-for="card in cards" :key="card.id">
      <img
        class="card-img"
        src="http://webcreatorbox.com/sample/images/bear.jpg"
        alt
      />
      <div class="card-content">
        <h2 class="card-title">仙人</h2>
        <p class="card-text">#東京都</p>
        <div class="flex align-items-center between">
          <button @click="$router.push('/Detail')">詳しくみる</button>
          <img src="../assets/heart.svg" alt width="25px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [0, 1, 2, 2, 2],
    };
  },
};
</script>

<style scoped>
.card-wrapper {
  width: calc(100vw - 200px);
}
.card {
  width: 300px;
  height: 300px;
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
</style>
