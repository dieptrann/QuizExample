<script lang="ts">
import { ref, defineComponent } from "vue";

const Countdowner = defineComponent({
  setup() {
    const minutes = ref(15);
    const seconds = ref(0);

    const countdown = () => {
      if (seconds.value === 0) {
        if (minutes.value === 0) {
          // Timer is up
          //   console.log("32");
        } else {
          minutes.value--;
          seconds.value = 59;
        }
      } else {
        seconds.value--;
      }
    };
    setInterval(countdown, 1000);
    // watchEffect(() => {
    //   const timer = setInterval(countdown, 1000);

    //   // Clean up the interval on unmount
    //   return () => clearInterval(timer);
    // });

    return { minutes, seconds };
  },
});

export default Countdowner;
</script>

<template>
  <div>
    <p>{{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }}</p>
  </div>
</template>

<style scoped></style>
