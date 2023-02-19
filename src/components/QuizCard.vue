<template>
  <div v-if="!showScore">
    <div class="wrapper">
      <div>
        <img class="icon1" src="../assets/img/img-1.png" />
        <img class="icon2" src="../assets/img/img-2.png" />
        <img class="icon3" src="../assets/img/img-3.png" />
        <img class="icon4" src="../assets/img/img-4.png" />
        <img class="icon5" src="../assets/img/img-5.png" />
        <img class="icon6" src="../assets/img/img-6.png" />
        <img class="icon7" src="../assets/img/img-7.png" />
        <img class="icon8" src="../assets/img/img-8.png" />
      </div>
      <div class="header__quiz">
        <!-- <p>{{ questionCount }} of {{ questions.length }} questions</p> -->
        <CountdownTimer />
      </div>
      <n-progress
        style="padding-top: 10px"
        class="progress"
        type="line"
        color="#fb521b"
        :rail-color="changeColor('#fb521b', { alpha: 0.2 })"
        :percentage="value"
        indicator-text-color="#fb521b"
      />
      <!-- <form v-if="!showScore">
        <div class="question">{{ getCurrentQuestion.question }}</div>
        <div class="answers" :key="getCurrentQuestion.index">
        
          <label
            class="answer"
            v-for="(item, i) in getCurrentQuestion.answers"
            :key="i"
            :for="'option' + i"
            :class="` ${
              getCurrentQuestion.selected == i
                ? i == getCurrentQuestion.correctAnswer
                  ? 'correct'
                  : 'wrong'
                : ''
            }`"
          >
         
            <input
              type="radio"
              :id="'option' + i"
              :name="`question ` + getCurrentQuestion.index"
              :value="i"
              :key="i"
              :disabled="Boolean(getCurrentQuestion.selected)"
              @change="SetAnswer"
            />
            <label :for="`option${i}`">{{ item }}</label>
          </label>
        </div>
        <button
          @click.prevent="NextQuestion"
          :disabled="!getCurrentQuestion.selected"
        >
          {{ questionCount === questions.length ? "Finish" : "Next" }}
        </button>
      </form> -->
    </div>
  </div>

  <div v-else="showScore">
    <!-- <Congratulation :score="score" :questions="questions" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, computed } from "vue";
import Congratulation from "./Congratulation.vue";
import CountdownTimer from "./CountdownTimer.vue";
import { changeColor } from "seemly";
import { useThemeVars, NProgress } from "naive-ui";
import axios from "axios";

const status = false;

// const questions = ref([
//   {
//     question: "what is 1 + 1 ",
//     answers: ["2", "3", "6", "7"],
//     correctAnswer: 0,
//     selected: null,
//     index: 0,
//   },
//   {
//     question: "what is 2 * 2 ",
//     answers: ["2", "3", "4", "10"],
//     correctAnswer: 2,
//     selected: null,
//   },
//   {
//     question: "what is 10 / 5 ",
//     answers: ["2", "5", "6", "7"],
//     correctAnswer: 0,
//     selected: null,
//   },
//   {
//     question: "what is 3 + 2",
//     answers: ["5", "3", "6", "7"],
//     correctAnswer: 0,
//     selected: null,
//   },
//   {
//     question: "what is 7 - 4  ",
//     answers: ["1", "3", "6", "7"],
//     correctAnswer: 1,
//     selected: null,
//   },
// ]);
// const score = ref(0);
const currentQuestion = ref(0);
const selectedOption = ref();
const questionCount = ref(1);
// const selectedQuestion = ref(questions[0]);
const showScore = ref(false);
const value = ref(0);
const max = ref(100);
const isActive = ref(false);

const questions = ref(
  axios
    .get("https://63f078825703e063fa46909c.mockapi.io/questions")
    .then((res) => {
      console.log(res.data);
      res.data;
    })
);

console.log("questions", questions);
// const getCurrentQuestion = computed(() => {
//   let question = questions.value[currentQuestion.value];
//   question.index = currentQuestion.value;
//   return question;
// });

// const SetAnswer = (e: any) => {
//   questions.value[currentQuestion.value].selected = e.target.value;
//   e.target.value = null;
// };

// const score = computed(() => {
//   let value = 0;
//   questions.value.map((ques) => {
//     console.log("ques.selected", ques.selected);
//     console.log("ques.correctAnswer", ques.correctAnswer);
//     if (ques.correctAnswer === Number(ques.selected)) {
//       value++;
//     }
//     console.log("value", value);
//   });
//   return value;
// });

// const NextQuestion = () => {
//   if (questionCount.value < questions.value.length) {
//     currentQuestion.value++;
//     questionCount.value++;
//     value.value += (1 / questions.value.length) * 100;
//   } else {
//     showScore.value = true;
//   }
// };
const themeVars = useThemeVars();
</script>

<style scoped>
.wrapper {
  height: 500px;
  width: 800px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
}
.header__quiz {
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
  /* font-size: 20px; */
  font-weight: bold;
  align-items: center;
}
.header__quiz p {
  margin: 0;
}
.progress {
  margin: 0 auto;
  width: 65%;
}

.icon1,
.icon2,
.icon3,
.icon4,
.icon5,
.icon6,
.icon7,
.icon8 {
  width: 130px;
  margin: 10px;
  position: absolute;
  transition: all 0.5s;
  /* display: none; */
}
.icon1 {
  left: -80px;
}
.icon2 {
  left: -150px;
  bottom: 0;
}
.icon3 {
  right: -40px;
  bottom: 100px;
}
.icon4 {
  right: 20px;
  top: 40px;
}
.icon5 {
  left: -50px;
  bottom: 200px;
}
.icon6 {
  right: -90px;
  bottom: 250px;
}
.icon7 {
  left: -200px;
  bottom: 200px;
}
.icon8 {
  top: -90px;
  right: 120px;
}
form {
  padding: 10px 20px 20px 20px;
}

.question {
  font-size: 25px;
  font-weight: bold;

  text-align: center;
}
.answers {
  padding: 15px;
  text-align: center;
}

.active {
  color: white;
  background-color: green;
}
.answer {
  border: 1px solid #ececec;
  padding: 10px;
  width: 476px;
  border-radius: 40px;
  transition: all 0.5s;
  cursor: pointer;
  display: flex;
  margin: auto;
  margin-bottom: 10px;
}
.answer > input {
  margin-right: 10px;
  font-size: large;
}
form > button {
  border: 1px solid #fc4a1a;
  background-color: #fc4a1a;
  padding: 10px;
  width: 500px;
  font-size: 20px;
  border-radius: 40px;
  color: #fff;
  font-weight: bold;
  transition: all 0.5s;
  cursor: pointer;
  display: block;
  margin: auto;
}

.correct {
  color: #ececec;
  background-color: green;
}

.wrong {
  color: #ececec;
  background-color: red;
}
</style>
