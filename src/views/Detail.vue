<template>
  <div class="detail flex">
    <div class="left">
      <div class="flex align-items-center">
        <button>＜</button>
        <h2>仙人</h2>
      </div>
      <img
        src="http://webcreatorbox.com/sample/images/bear.jpg"
        alt
        width="100%"
      />
      <p>#東京都</p>
      <p>
        料理長厳選の食材から作る寿司を用いたコースをぜひお楽しみください。食材・味・価格、お客様の満足度を徹底的に追及したお店です。特別な日のお食事、ビジネス接待まで気軽に使用することができます。
      </p>
    </div>
    <div class="right">
      <div class="card">
        <div class="card-content">
          <h2>予約</h2>
          <Calendar />
          <div class="pull-down">
            <select name="area">
              <option value hidden>Select time ...</option>
              <option value>17時</option>
              <option value>18時</option>
              <option value>19時</option>
              <option value>20時</option>
              <option value>21時</option>
              <option value>22時</option>
            </select>
          </div>
          <div class="pull-down">
            <select name="area">
              <option value hidden>Select number ...</option>
              <option value>1人</option>
              <option value>2人</option>
              <option value>3人</option>
              <option value>4人</option>
            </select>
          </div>
          <div class="reservation-data">
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
        <div class="reservation-btn">予約する</div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";

export default {
  components: {
    Calendar,
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
