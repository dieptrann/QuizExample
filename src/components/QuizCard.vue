
<template>
    <div class="wrapper">
        <img class="icon1" src="../assets/img/img-1.png" />
        <img class="icon2" src="../assets/img/img-2.png" />
        <img class="icon3" src="../assets/img/img-3.png" />
        <img class="icon4" src="../assets/img/img-4.png" />
        <img class="icon5" src="../assets/img/img-5.png" />
        <img class="icon6" src="../assets/img/img-6.png" />
        <img class="icon7" src="../assets/img/img-7.png" />
        <img class="icon8" src="../assets/img/img-8.png" />
        <form @submit.prevent="submitAnswer" v-if="!showScore">
            <div class="title-quiz">Question</div>
            <div class="num-quiz">{{ questionCount }}/{{questions.length}}</div>
            <div class="question">{{selectedQuestion.question}}</div>
            <div class="answers">
                <label class="answer" v-for="(item, i) in selectedQuestion.answers">
                    <input type="radio" :id="`option${i}`" name="answers" v-model="selectedOption" :value="item" />
                    <label :for="`option${i}`">{{item}}</label>
                </label>
            </div>
            <button>Submit</button>
        </form>
        <div class="score" v-else>
            score is {{ score }} out of {{ questions.length }}
        </div>
        <div>  <CountdownTimer /></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CountdownTimer from "./CountdownTimer.vue";

const status = false;

const questions = [
    {
        "question":"what is 1 + 1 ",
        "answers":["2","3","6","7"],
        "correctAnswer":"2"
    },
    {
        "question":"what is 2 * 2 ",
        "answers":["2","3","4","10"],
        "correctAnswer":"4"
    },
    {
        "question":"what is 10 / 5 ",
        "answers":["2","5","6","7"],
        "correctAnswer":"2"
    },
    {
        "question":"what is 3 + 2",
        "answers":["5","3","6","7"],
        "correctAnswer":"5"
    },
    {
        "question":"what is 7 - 6  ",
        "answers":["1","3","6","7"],
        "correctAnswer":"1"
    }
]
const score = ref(0);
const selectedOption = ref("")
const questionCount = ref(1);
const selectedQuestion = ref(questions[0]);
const showScore = ref(false);
const submitAnswer = () => { 
    if (selectedQuestion.value.correctAnswer == selectedOption.value) {
        score.value++;
    }
    if (questionCount.value < questions.length ) {
        selectedQuestion.value = questions[questionCount.value];
        questionCount.value++
        selectedOption.value = "";
    }else { 
        showScore.value = true;
    }
        
}
</script>


<style scoped>
.wrapper{
    height: 500px;
    width: 800px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
}
.icon1, .icon2, .icon3, .icon4, .icon5, .icon6, .icon7, .icon8{
    width: 130px;
    margin: 10px;
    position: absolute;
    transition: all 0.5s;
}
.icon1{
    left: -80px;
}
.icon2{
    left: -150px;
    bottom: 0;
}
.icon3{
    right: -40px;
    bottom: 100px;
}
.icon4{
    right: 20px;
    top: 40px;
}
.icon5{
    left: -50px;
    bottom: 200px;
}
.icon6{
    right: -90px;
    bottom: 250px;
}
.icon7{
    left: -200px;
    bottom: 200px;
}
.icon8{
    top: -70px;
    right: 120px;
}
form{
    padding: 20px;
}
.title-quiz{
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
}
.num-quiz{
    font-size: 15px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
}
.question{
    font-size: 25px;
    font-weight: bold;
    padding: 15px;
    text-align: center;
}
.answers{
    padding: 15px;
    text-align: center;
}
.answer{
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
.answer > input{
    margin-right: 10px;
    font-size: large;
}
form > button{
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
</style>
