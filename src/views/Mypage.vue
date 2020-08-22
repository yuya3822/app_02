<template>
  <div class="mypage">
    <h2>testさん</h2>
    <div class="flex between">
      <div class="left">
        <h3>予約状況</h3>
        <div
          class="card"
          v-for="(reservation, index) in reservationData"
          :key="index"
        >
          <div class="flex align-items-center between">
            <img src="../assets/time.png" alt="" width="25px" height="25px" />
            <p class="title">予約{{ index + 1 }}</p>
            <img
              src="../assets/cross.png"
              alt=""
              width="25px"
              height="25px"
              @click="cancel(reservation.id)"
              class="cancel"
            />
          </div>
          <table>
            <tr>
              <td>Shop</td>
              <td>{{ reservation.name }}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{{ reservation.date }}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>{{ reservation.time }}</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>{{ reservation.user_num }}人</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="right">
        <h3>お気に入り店舗</h3>
        <div class="flex">
          <CommonCard :is="CommonCard" :shops="likeData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommonCard from "@/components/CommonCard.vue";
export default {
  data() {
    return {
      reservationData: [],
      likeData: [],
      CommonCard: null,
    };
  },
  methods: {
    async cancel(id) {
      const baseUrl = "https://thawing-refuge-74444.herokuapp.com/api/";
      await axios.delete(baseUrl + "reservations?id=" + id);
      this.$router.go({
        path: this.$router.currentRoute.path,
        force: true,
      });
    },
    async getReservationData() {
      const baseUrl = "https://thawing-refuge-74444.herokuapp.com/api/";
      const reservationData = await axios.get(
        baseUrl + "reservations?user_id=" + this.$store.state.user.id
      );
      let reservation = reservationData.data.data;
      for (let i = 0; i < reservation.length; i++) {
        const shopData = await axios.get(
          baseUrl + "shops/" + reservation[i].shop_id
        );
        reservation[i].name = shopData.data.item.name;
      }
      this.reservationData = reservation;
    },
    async getLikeData() {
      const baseUrl = "https://thawing-refuge-74444.herokuapp.com/api/";
      const likeData = await axios.get(
        baseUrl + "like?user_id=" + this.$store.state.user.id
      );
      let like = likeData.data.data;
      for (let i = 0; i < like.length; i++) {
        const shopData = await axios.get(baseUrl + "shops/" + like[i].shop_id);
        shopData.data.item.like = true;
        this.likeData.push(shopData.data.item);
      }
    },
  },
  async created() {
    await this.getReservationData();
    await this.getLikeData();
    this.CommonCard = CommonCard;
  },
};
</script>

<style scoped>
.mypage {
  padding: 120px 100px 0;
}
.mypage > div {
  width: 85vw;
  max-width: 1200px;
  margin: 0 auto;
}
h2 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 48px;
}
h3 {
  font-size: 24px;
  margin-bottom: 30px;
}
.left {
  width: 40%;
}
.title {
  margin-right: 60%;
}
.card {
  background: #305dff;
  width: 80%;
  margin: 30px 0;
  padding: 30px;
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 4px gray;
}
.card div {
  margin-bottom: 25px;
}
tr {
  height: 40px;
}
td {
  width: 100px;
  vertical-align: middle;
}
.cancel {
  cursor: pointer;
}
.right {
  width: 55%;
}
</style>
