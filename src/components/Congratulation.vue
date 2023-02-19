<script lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
import { defineComponent } from "vue";

const Score = defineComponent({
  props: ["score","questions"],
});

export default Score;
</script>
<template>
  <div class="abc">
    <div class="wrapper">
      <div class="badge">
        <img src="../assets/img/badge.png" alt="badge" />
      </div>
      <div>
        <p class="title">Congratulations!</p>
        <!-- You have achieved  correct answers -->
        <p class="content">Your score is <span style="font-size: 22px; color: #fc4a1a; font-weight: bold;">{{ score }}</span> / {{ questions.length   }}</p>
        <!-- <p>{{ questions }}</p> -->
      </div>
      <div class="button_restart">
        <button class="restart" @click="$router.push('/')">Restart</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.abc {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.wrapper {
  height: 550px;
  background-color: #feb;
  width: 400px;
  border-radius: 20px;
  position: relative;
  z-index: 1000;
}
.badge {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
.badge img {
  height: 200px;
}
.title {
  font-size: 30px;
  font-weight: bold;
  text-align: center;

  color: #fc4a1a;
}
.content {
  text-align: center;
  color: #9c9fa8;
  font-size: 18px;
}
.button_restart {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.restart {
  border: 2px solid #fc4a1a;
  padding: 20px;
  background-color: #feb;
  width: 250px;
  font-size: 25px;
  border-radius: 40px;
  color: #fc4a1a;
  font-weight: bold;
  transition: all 0.5s;
  cursor: pointer;
  text-transform: uppercase;
  display: flex !important;
  justify-content: center;
}
.restart:hover {
  border: 2px solid #fff;
  background-color: #fc4a1a;
  color: #fff;
}
</style>
