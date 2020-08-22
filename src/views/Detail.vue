<template>
  <div class="detail flex">
    <div class="left">
      <div class="flex align-items-center">
        <button @click="$router.push('/')">＜</button>
        <h2>{{ shopsData.name }}</h2>
      </div>
      <img :src="shopsData.image_url" alt width="100%" />
      <p>#{{ shopsData.area }}&nbsp;#{{ shopsData.genre }}</p>
      <p>{{ shopsData.description }}</p>
    </div>
    <div class="right">
      <div class="card">
        <div class="card-content">
          <h2>予約</h2>
          <DatePicker is-inline v-model="selectDate" />
          <div class="pull-down">
            <select v-model="time">
              <option value hidden>Select time ...</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
          </div>
          <div class="pull-down">
            <select v-model="number">
              <option value="1">1人</option>
              <option value="2">2人</option>
              <option value="3">3人</option>
              <option value="4">4人</option>
            </select>
          </div>
          <div class="reservation-data">
            <table>
              <tr>
                <td>Shop</td>
                <td>{{ shopsData.name }}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>{{ fixedDate }}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>{{ time }}</td>
              </tr>
              <tr>
                <td>Number</td>
                <td>{{ number }}人</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="reservation-btn" @click="select()">予約する</div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      shopsData: "",
      selectDate: new Date(),
      time: "17:00",
      number: 1,
    };
  },
  props: ["shop_id"],
  components: {
    DatePicker,
  },
  async created() {
    const baseUrl = "https://thawing-refuge-74444.herokuapp.com/api/";
    const shops = await axios.get(baseUrl + "shops/" + this.shop_id);
    this.shopsData = shops.data.item;
  },
  methods: {
    async select() {
      const baseUrl = "https://thawing-refuge-74444.herokuapp.com/api/";
      const sendData = {
        date: this.fixedDate,
        time: this.time,
        user_id: this.$store.state.user.id,
        shop_id: this.shop_id,
        user_num: this.number,
      };
      await axios.post(baseUrl + "reservations", sendData);
      this.$router.push("/Reservation");
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
.left {
  padding: 140px 0 0 100px;
  width: 45%;
}
.left h2 {
  font-size: 28px;
  margin-left: 12px;
}
.left img {
  margin-top: 30px;
}
.left p {
  margin-top: 25px;
  line-height: 24px;
}
.left button {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  box-shadow: 2px 2px 4px gray;
}
.right {
  width: 45%;
  padding: 40px 100px 0;
}
.right .card {
  background: #305dff;
  width: 100%;
  height: 85vh;
  border-radius: 5px;
  position: relative;
  box-shadow: 2px 2px 4px gray;
}
.right .card .card-content {
  padding: 36px 0 0 28px;
}
.right .card h2 {
  font-size: 24px;
  color: #fff;
  margin-bottom: 28px;
}
.pull-down {
  margin-top: 14px;
}
select {
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
.reservation-data {
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
  z-index: 100;
  background: #0038ff;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
}
</style>
