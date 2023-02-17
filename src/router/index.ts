import { createRouter, createWebHistory } from 'vue-router' 
import Welcome from '../components/Welcome.vue'
import QuizCard from '../components/QuizCard.vue'

const router = createRouter({ 
  history: createWebHistory(), 
  routes: [ 
    { 
      path: '/', 
      name: 'welcome', 
      component: Welcome 
    }, 
    { 
      path: '/quiz', 
      name: 'quizCard', 
      component: QuizCard 
    }, 
    
  ] 
}) 
 
export default router