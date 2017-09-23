import Envelope from '@/components/envelope/Envelope.vue'
import { mount } from 'avoriaz'

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
})
