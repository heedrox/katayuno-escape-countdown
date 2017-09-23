import Vue from 'vue'
import Envelope from '@/components/envelope/Envelope.vue'
import { mount } from 'avoriaz'
import VueResource from 'vue-resource'
import { givenHttpMethodReturns, restoreHttpMethod } from '../utils'
Vue.use(VueResource)

describe('Envelope.vue', () => {
  let wrapper
  let vm

  beforeEach(() => {
    wrapper = mount(Envelope)
    vm = wrapper.vm
  })
  it('sets ups', () => {
    expect(vm.state).to.eql('closed')
  })
  describe('state changes when click', () => {
    it('changes from closed to open', () => {
      vm.state = 'closed'
      vm.triggerState()

      expect(vm.state).to.eql('open')
    })
    it('changes from open to closed', () => {
      vm.state = 'open'
      vm.triggerState()

      expect(vm.state).to.eql('closed')
    })
    it('changes from unknown to open', () => {
      vm.state = 'totallyUnknownAndMessedUp'
      vm.triggerState()

      expect(vm.state).to.eql('open')
    })
  })
  it('fills modal with contents from content-src', () => {
    givenHttpMethodReturns('get', {body: 'thisContent'})
    vm.state = 'closed'
    vm.contentSrc = '/static/file.html'

    vm.triggerState()

    expect(Vue.http.get).to.have.been.calledWith('/static/file.html')
    expect(vm.modal.text).to.equal('thisContent')
    restoreHttpMethod('get')
  })
})
