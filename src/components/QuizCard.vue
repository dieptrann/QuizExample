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
        <p>{{ questionCount }} of {{ questions.length }} questions</p>
        <div class="timer">
          <p>
            Time lefts: {{ minutes }}:{{
              seconds < 10 ? "0" + seconds : seconds
            }}
          </p>
        </div>
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
      <form>
        <div class="question">{{ getCurrentQuestion.question }}</div>
        <div class="answers" :key="getCurrentQuestion.index">
          <label
            class="answer"
            v-for="(item, i) in getCurrentQuestion.answers"
            :key="i"
            :for="`option`+i"
            :class="` ${
              getCurrentQuestion.selected == i
                ? i == getCurrentQuestion.correctAnswer
                  ? 'correct'
                  : 'wrong'
                : ''
            } ${
              getCurrentQuestion.selected &&
              getCurrentQuestion.correctAnswer == i &&
              'correct'
            }`"
          >
            <input
              type="radio"
              :name="`question ` + getCurrentQuestion.index"
              :id="`option` + i"
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
      </form>
    </div>
  </div>

  <div v-else="showScore">
    <Congratulation :score="score" :questions="questions" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Congratulation from "./Congratulation.vue";
import { changeColor } from "seemly";
import { useThemeVars, NProgress } from "naive-ui";

const status = false;
interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
  selected: number | null;
  index?: number;
}
const questions = ref<Question[]>([
  {
    question: "What does HTML stand for?",
    correctAnswer: "0",
    answers: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "None of the above",
    ],
    selected: null,
    index: 0,
  },
  {
    question: "What does CSS stand for?",
    correctAnswer: "1",
    answers: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "None of the above",
    ],
    selected: null,
  },
  {
    question: "What does DOM stand for?",
    correctAnswer: "2",
    answers: [
      "Document Object Model",
      "Digital Object Model",
      "Data Object Model",
      "None of the above",
    ],
    selected: null,
  },
  {
    question: "What does API stand for?",
    correctAnswer: "3",
    answers: [
      "Application Programming Interface",
      "Application Program Interface",
      "Application Processor Interface",
      "None of the above",
    ],
    selected: null,
  },
]);
console.log("questions", questions);

const currentQuestion = ref(0);
const questionCount = ref(1);
const showScore = ref(false);
const value = ref(0);

const minutes = ref(15);
const seconds = ref(0);
const countdown = () => {
  if (seconds.value === 0) {
    if (minutes.value === 0) {
      showScore.value = true;
    } else {
      minutes.value--;
      seconds.value = 59;
    }
  } else {
    seconds.value--;
  }
};
setInterval(countdown, 1000);

// const questions = ref([]);
//  const res = await axios
//   .get("https://63f078825703e063fa46909c.mockapi.io/questions")
//   .then((data: any) => {
//     questions.value = data.data;
//   })
//   .catch((err) => console.log("err"));

// console.log("questions", questions);

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});

const SetAnswer = (e: { target: { value: string | null } }) => {
  questions.value[currentQuestion.value].selected = e.target.value;
  e.target.value = null;
};

const score = computed(() => {
  let value = 0;
  questions.value.map((ques) => {
    if (ques.correctAnswer === ques.selected) {
      console.log("ques", ques.selected);
      value++;
      console.log("value", value);
    }

  });
  return value;
});

const NextQuestion = () => {
  if (questionCount.value < questions.value.length) {
    currentQuestion.value++;
    questionCount.value++;
    value.value += (1 / questions.value.length) * 100;
  } else {
    showScore.value = true;
  }
};
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
.timer {
  background-color: #fc4a1a;
  color: white;
  padding: 4px 20px;
  border-radius: 10px;
}
.timer p {
  text-align: center;
  vertical-align: middle;
  margin: 0;
}
</style>
