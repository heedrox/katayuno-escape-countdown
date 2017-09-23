import Envelope from '@/components/envelope/Envelope.vue'
import { mount } from 'avoriaz'

describe('Envelop.vue', () => {
  let wrapper
  let vm

  beforeEach(() => {
    wrapper = mount(Envelope)
    vm = wrapper.vm
  })
  it('sets ups', () => {
    expect(vm).to.be.defined
  })

})
