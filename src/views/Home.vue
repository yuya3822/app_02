<template>
  <div class="main">
    <div class="search flex">
      <div class="search__pull-down">
        <select name="area" v-model="selectedArea">
          <option value="">All area</option>
          <option v-for="area in areasData" :value="area.name" :key="area.id">
            {{ area.name }}
          </option>
        </select>
      </div>
      <div class="search__pull-down">
        <select name="genre" v-model="selectedGenre">
          <option value="">All genre</option>
          <option
            v-for="genre in genresData"
            :value="genre.name"
            :key="genre.id"
          >
            {{ genre.name }}
          </option>
        </select>
      </div>
      <input
        class="search__keyword"
        type="text"
        placeholder="Search ..."
        v-model="keyword"
      />
    </div>
    <CommonCard :shops="filteredShops" @getChildData="getShops" />
  </div>
</template>

<script>
import axios from "axios";
import CommonCard from "@/components/CommonCard";
export default {
  data() {
    return {
      shopsData: [],
      areasData: [],
      genresData: [],
      keyword: "",
      selectedArea: "",
      selectedGenre: "",
    };
  },
  computed: {
    filteredShops() {
      let shops = [];
      for (let i in this.shopsData) {
        let shop = this.shopsData[i];
        if (shop.name.indexOf(this.keyword) !== -1) {
          if (shop.area.name == this.selectedArea || !this.selectedArea) {
            if (shop.genre.name == this.selectedGenre || !this.selectedGenre) {
              shops.push(shop);
            }
          }
        }
      }
      return shops;
    },
  },
  methods: {
    async getShops() {
      const baseUrl = "http://localhost:8000/api/v1/";
      const shops = await axios.get(
        baseUrl + "shops?user_id=" + this.$store.state.user_id
      );
      this.shopsData = shops.data.data;
    },
    async getAreas() {
      const baseUrl = "http://localhost:8000/api/v1/";
      const areas = await axios.get(baseUrl + "areas");
      this.areasData = areas.data.data;
    },
    async getGenres() {
      const baseUrl = "http://localhost:8000/api/v1/";
      const genres = await axios.get(baseUrl + "genres");
      this.genresData = genres.data.data;
    },
  },
  created() {
    this.getShops();
    this.getAreas();
    this.getGenres();
  },
  components: {
    CommonCard,
  },
};
</script>

<style scoped>
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

.search__pull-down {
  border-right: 1px solid #eee;
}

.search__pull-down select {
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
  cursor: pointer;
}

.search__keyword {
  width: 400px;
  background-image: url(../assets/search.png);
  background-repeat: no-repeat;
  background-position: 8px center;
  background-size: auto 60%;
  background-color: #fff;
  padding-left: 40px;
  border: none;
  outline: 0;
  font-size: 14px;
}

.search__btn {
  background: #305dff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 60px;
  text-align: center;
}
</style>
