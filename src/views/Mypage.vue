<template>
  <div class="mypage">
    <h2>testさん</h2>
    <div class="flex between">
      <div class="left">
        <h3>予約状況</h3>
        <div class="card">
          <div class="flex align-items-center between">
            <img src="../assets/time.png" alt="" width="25px" height="25px" />
            <p class="title">予約1</p>
            <img src="../assets/cross.png" alt="" width="25px" height="25px" />
          </div>
          <table>
            <tr>
              <td>Shop</td>
              <td>仙人</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>2020/05/15</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>22:00</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>2人</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="right">
        <h3>お気に入り店舗</h3>
        <div class="flex">
          <CommonCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonCard from "@/components/CommonCard.vue";
export default {
  components: {
    CommonCard,
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
.right {
  width: 55%;
}
</style>
