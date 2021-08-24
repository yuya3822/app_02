<template>
  <div class="main">
    <h2 class="username">{{ user.name }}さん</h2>
    <div class="flex between mypage">
      <div class="status">
        <h3 class="status__ttl">予約状況</h3>
        <div
          class="status__card"
          v-for="(shop, index) in user.reservations"
          :key="shop.id"
        >
          <div class="flex align-items-center between status__card__top">
            <img
              src="../assets/time.png"
              alt="time-icon"
              width="25px"
              height="25px"
            />
            <p>予約{{ index + 1 }}</p>
            <img
              src="../assets/cross.png"
              alt="cross-icon"
              width="25px"
              height="25px"
              @click="cancel(shop.pivot.id, shop.id)"
              class="cancel"
            />
          </div>
          <table class="status__card__bottom">
            <tr>
              <td>Shop</td>
              <td>{{ shop.name }}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{{ shop.pivot.date }}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>{{ shop.pivot.time }}</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>{{ shop.pivot.user_num }}人</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="likes">
        <h3 class="likes__ttl">お気に入り店舗</h3>
        <div class="flex card-wrapper between wrap">
          <CommonCard :shops="user.likes" @getChildData="getUser" />
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
      user: "",
    };
  },
  methods: {
    async cancel(reservation_id, shop_id) {
      const baseUrl = "https://desolate-journey-37709.herokuapp.com/api/v1/";
      await axios.delete(
        baseUrl + "shops/" + shop_id + "/reservations/" + reservation_id
      );
      await this.getUser();
    },
    async getUser() {
      const baseUrl = "https://desolate-journey-37709.herokuapp.com/api/v1/";
      const user = await axios.get(
        baseUrl + "users/" + this.$store.state.user_id
      );
      this.user = user.data.data;
    },
  },
  async created() {
    await this.getUser();
  },
  components: {
    CommonCard,
  },
};
</script>

<style scoped>
.username {
  text-align: center;
  font-size: 32px;
  margin-bottom: 48px;
}

.mypage {
  width: 85vw;
  max-width: 1200px;
  margin: 0 auto;
}

.status {
  width: 40%;
}

.status__ttl {
  font-size: 24px;
  margin-bottom: 30px;
}

.status__card {
  background: #305dff;
  width: 80%;
  margin: 30px 0;
  padding: 30px;
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 4px gray;
}

.status__card__top {
  margin-bottom: 25px;
}

.status__card__bottom tr {
  height: 40px;
}

.status__card__bottom td {
  width: 100px;
  vertical-align: middle;
}

.cancel {
  cursor: pointer;
}

.likes {
  width: 55%;
}

.likes__ttl {
  font-size: 24px;
  margin-bottom: 30px;
}
</style>
