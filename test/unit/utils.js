import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'

Vue.use(Vuex)

export function getVM (component, store = {}) {
  return new Vue({
    el: document.createElement('div'),
    store,
    render: h => h(component, { ref: 'component' })
  }).$mount()
}

export function getMockedStore () {
  return new Vuex.Store({
    state: JSON.parse(JSON.stringify(state))
  })
}

export function whenTrigger (event, element, wrapper) {
  const button = wrapper.find(element)[0]
  button.trigger(event)
}
