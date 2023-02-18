<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="content">
    <h1 class="title">QUIZ TIME</h1>
    <img class="img" src="../assets/img/welcome-img.png" />
    <button @click="router.push('/quiz')" class="start">Get Started</button>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
}
.title {
  color: #fff;
  font-size: 100px;
  margin: 0;
  padding-bottom: 40px;
}
.img {
  width: 320px;
  display: block;
  margin: auto;
}
.start {
  border: 2px solid #fc4a1a;
  padding: 25px;
  width: 250px;
  font-size: 25px;
  border-radius: 40px;
  color: #fc4a1a;
  font-weight: bold;
  transition: all 0.5s;
  cursor: pointer;
}
.start:hover {
  border: 2px solid #fff;
  background-color: #fc4a1a;
  color: #fff;
}
</style>
