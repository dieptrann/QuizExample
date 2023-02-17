<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { appendFile } from "fs";
import {ref} from "vue";
import Welcome from "../src/components/Welcome.vue";

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,400;1,700&display=swap');
*{
  box-sizing: border-box;
}
body{
  margin: 0;
}
.container{
  background: #fc4a1a;
  background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);  
  background: linear-gradient(to right, #f7b733, #fc4a1a); 

  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
