// importa i createRouter e createWebHistory che vengono utilizzati per collegare le rotte create dalle nostre componenti 
import { createRouter, createWebHistory } from "vue-router";

import Home from '/src/pages/Home.vue'
import AdvanceSearch from './pages/AdvanceSearch.vue'
import ApartmentDetail from './pages/ApartmentDetail.vue'
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes:[
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
      path:'/search',
      name:'AdvanceSearch',
      component: AdvanceSearch
    },
    {
      path:'/apartment/:slug',
      name:'ApartmentDetail',
      component: ApartmentDetail
    },
  ]
});

export { router }