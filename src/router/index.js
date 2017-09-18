import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView'
import SoonView from '../views/SoonView'
import CountdownView from '../views/CountdownView.vue'
import KeypadView from '../views/KeypadView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: SoonView
  }, {
    path: '/home',
    component: HomeView
  }, {
    path: '/countdown',
    component: CountdownView
  }, {
    path: '/keypad',
    component: KeypadView
  }]
})
