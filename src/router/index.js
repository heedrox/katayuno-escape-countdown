import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BriefingsView from '../views/BreefingsView.vue'
import CountdownView from '../views/CountdownView.vue'
import Keypad1View from '../views/Keypad1View.vue'
import Keypad2View from '../views/Keypad2View.vue'
import Keypad3View from '../views/Keypad3View.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: HomeView
  }, {
    path: '/home',
    component: HomeView
  }, {
    path: '/briefings',
    component: BriefingsView
  }, {
    path: '/countdown',
    component: CountdownView
  }, {
    path: '/keypad1',
    component: Keypad1View
  }, {
    path: '/keypad2',
    component: Keypad2View
  }, {
    path: '/keypad3',
    component: Keypad3View
  }]
})
