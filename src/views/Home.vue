<template>
  <div class="home">
    <div class="search flex">
      <div class="pull-down">
        <select name="area" v-model="selectedArea">
          <option value="">All area</option>
          <option value="東京都">東京都</option>
          <option value="大阪府">大阪府</option>
          <option value="福岡県">福岡県</option>
        </select>
      </div>
      <div class="pull-down">
        <select name="genre" v-model="selectedGenre">
          <option value="">All genre</option>
          <option value="寿司">寿司</option>
          <option value="焼肉">焼肉</option>
          <option value="居酒屋">居酒屋</option>
          <option value="イタリアン">イタリアン</option>
          <option value="ラーメン">ラーメン</option>
        </select>
      </div>
      <input type="text" placeholder="Search ..." v-model="keyword" />
    </div>
    <CommonCard :is="CommonCard" :shops="filteredShops" />
  </div>
</template>

<script>
import axios from "axios";
import CommonCard from "@/components/CommonCard";
export default {
  data() {
    return {
      shopsData: [],
      keyword: "",
      selectedArea: "",
      selectedGenre: "",
      likeData: "",
      CommonCard: null,
    };
  },
  computed: {
    filteredShops() {
      let shops = [];
      for (let i in this.shopsData) {
        let shop = this.shopsData[i];
        if (shop.name.indexOf(this.keyword) !== -1) {
          if (shop.area == this.selectedArea || !this.selectedArea) {
            if (shop.genre == this.selectedGenre || !this.selectedGenre) {
              shops.push(shop);
            }
          }
        }
      }
      return shops;
    },
  },
  async created() {
    const baseUrl = "https://thawing-refuge-74444.herokuapp.com/api/";
    const shops = await axios.get(baseUrl + "shops");
    this.shopsData = shops.data.data;
    this.likeData = await axios.get(
      baseUrl + "like?user_id=" + this.$store.state.user.id
    );
    for (let i = 0; i < this.shopsData.length; i++) {
      for (let j = 0; j < this.likeData.data.data.length; j++) {
        if (!this.shopsData[i].like) {
          this.shopsData[i].like =
            this.shopsData[i].id === this.likeData.data.data[j].shop_id
              ? true
              : false;
        }
      }
    }
    this.CommonCard = CommonCard;
  },
};
</script>

<style scoped>
.home {
  padding: 120px 100px 0;
}
.search {
  position: absolute;
  top: 40px;
  right: 100px;
  width: 600px;
  height: 30px;
  padding: 10px 5px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 4px gray;
}
.pull-down {
  border-right: 1px solid #eee;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 7px 30px 7px 10px;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  border: none;
  background-image: url(../assets/triangle.png);
  background-repeat: no-repeat;
  background-size: 12px 10px;
  background-position: right 10px center;
  line-height: 1.1em;
  outline: none;
  cursor: pointer;
}
input {
  border: none;
  width: 400px;
  background-image: url(../assets/search.png);
  background-repeat: no-repeat;
  background-position: 8px center;
  background-size: auto 60%;
  background-color: #fff;
  padding-left: 40px;
  outline: 0;
  font-size: 14px;
}
</style>
