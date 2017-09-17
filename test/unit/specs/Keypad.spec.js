import Keypad from '@/components/Keypad'
import { mount } from 'avoriaz'

describe('Keypad.vue', () => {
  let wrapper
  let vm

  beforeEach(() => {
    wrapper = mount(Keypad)
    vm = wrapper.vm
  })
  it('sets ups', () => {
    expect(vm.combination).to.equal('')
  })
  it('sets ups', () => {
    expect(vm.combination).to.equal('')
  })
})
