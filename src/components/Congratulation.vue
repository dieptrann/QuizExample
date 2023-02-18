<template>
  <div class="abc">
    <div class="wrapper">
      <div class="badge">
        <img src="../assets/img/badge.png" alt="badge" />
      </div>
      <div>
        <p class="title">Congratulations!</p>
        <p class="content">You have achieved 3 correct answers</p>
      </div>
      <div class="button_restart">
        <button class="restart">Restart</button>
      </div>
    </div>
   
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.abc{
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
