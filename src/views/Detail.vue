<template>
  <div class="main flex">
    <div class="shop-detail">
      <div class="flex align-items-center">
        <a class="shop-detail__link" @click="$router.push('/')">＜</a>
        <h2 class="shop-detail__ttl">{{ shopsData.name }}</h2>
      </div>
      <img
        class="shop-detail__img"
        :src="shopsData.image_url"
        alt="shop-img"
        width="100%"
      />
      <p class="shop-detail__txt">
        #{{ shopsData.area.name }}&nbsp;#{{ shopsData.genre.name }}
      </p>
      <p class="shop-detail__txt">{{ shopsData.description }}</p>
    </div>
    <div class="reservation">
      <form class="reservation-card" @submit.prevent="select">
        <div class="reservation-card__content">
          <h2 class="reservation-card__content__ttl">予約</h2>
          <input type="date" v-model="selectedDate" />
          <div class="reservation-card__pull-down">
            <select v-model="selectedTime">
              <option v-for="item in times" :key="item.time" :value="item.time">
                {{ item.time }}
              </option>
            </select>
          </div>
          <div class="reservation-card__pull-down">
            <select v-model="selectedNumber">
              <option
                v-for="item in numbers"
                :key="item.number"
                :value="item.number"
              >
                {{ item.number }}人
              </option>
            </select>
          </div>
          <div class="reservation-card__data">
            <table>
              <tr>
                <td>Shop</td>
                <td>{{ shopsData.name }}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>{{ selectedDate }}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>{{ selectedTime }}</td>
              </tr>
              <tr>
                <td>Number</td>
                <td>{{ selectedNumber }}人</td>
              </tr>
            </table>
          </div>
        </div>
        <input type="submit" class="reservation-btn" value="予約する" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  props: ["shop_id"],
  data() {
    return {
      shopsData: {
        area: {
          name: "",
        },
        genre: {
          name: "",
        },
      },
      selectedDate: moment().format("YYYY-MM-DD"),
      selectedTime: "17:00",
      selectedNumber: 1,
      times: [
        {
          time: "17:00",
        },
        {
          time: "18:00",
        },
        {
          time: "19:00",
        },
        {
          time: "20:00",
        },
        {
          time: "21:00",
        },
        {
          time: "22:00",
        },
      ],
      numbers: [
        {
          number: 1,
        },
        {
          number: 2,
        },
        {
          number: 3,
        },
        {
          number: 4,
        },
      ],
    };
  },
  created() {
    this.getShops();
  },
  methods: {
    async select() {
      const baseUrl = "http://localhost:8000/api/v1/";
      const sendData = {
        date: this.selectedDate,
        time: this.selectedTime,
        user_id: this.$store.state.user_id,
        user_num: this.selectedNumber,
      };
      await axios.post(
        baseUrl + "shops/" + this.shop_id + "/reservations",
        sendData
      );
      this.$router.push("/reservation");
    },
    async getShops() {
      const baseUrl = "http://localhost:8000/api/v1/";
      const shops = await axios.get(baseUrl + "shops/" + this.shop_id);
      this.shopsData = shops.data.data;
    },
  },
  computed: {
    fixedDate() {
      return moment(this.selectDate).format("YYYY/MM/DD");
    },
  },
};
</script>

<style scoped>
.shop-detail {
  padding: 40px 0 0 100px;
  width: 45%;
}

.shop-detail__link {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 2px 2px 4px gray;
}

.shop-detail__ttl {
  font-size: 28px;
  margin-left: 12px;
}

.shop-detail__img {
  margin-top: 30px;
}

.shop-detail__txt {
  margin-top: 25px;
  line-height: 24px;
}

.reservation {
  width: 45%;
  padding: 40px 100px 0;
}

.reservation-card {
  background: #305dff;
  width: 100%;
  height: 70vh;
  border-radius: 5px;
  position: relative;
  box-shadow: 2px 2px 4px gray;
}

.reservation-card__content {
  padding: 36px 0 0 28px;
}

.reservation-card__content__ttl {
  font-size: 24px;
  color: #fff;
  margin-bottom: 28px;
}

.reservation-card__pull-down {
  margin-top: 14px;
}

.reservation-card__pull-down select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 7px 30px 7px 10px;
  height: 30px;
  width: 90%;
  border-radius: 5px;
  border: none;
  background-image: url(../assets/triangle.png);
  background-repeat: no-repeat;
  background-size: 12px 10px;
  background-position: right 10px center;
  line-height: 1.1em;
  outline: none;
}

.reservation-card__data {
  background: rgba(135, 197, 255, 0.32);
  margin-top: 20px;
  width: 80%;
  border-radius: 5px;
  color: #fff;
  padding: 20px;
}

tr {
  height: 30px;
}

td {
  width: 100px;
  vertical-align: middle;
}

.reservation-btn {
  width: 100%;
  text-align: center;
  color: #fff;
  position: absolute;
  bottom: 0;
  padding: 20px 0;
  border: none;
  z-index: 1;
  background: #0038ff;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
}
</style>
