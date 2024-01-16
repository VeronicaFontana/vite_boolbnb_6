// importa i createRouter e createWebHistory che vengono utilizzati per collegare le rotte create dalle nostre componenti 
import { createRouter, createWebHistory } from "vue-router";

import Home from '/src/pages/Home.vue'
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes:[
    {
      path:'/',
      name:'home',
      component: Home
    }
  ]
});

export { router }