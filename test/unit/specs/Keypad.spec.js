import Keypad from '@/components/Keypad'
import { mount } from 'avoriaz'

const keypadTargetCoordinates = () => {
  return {
    getBoundingClientRect: () => { return {top: 100, right: 0, bottom: 0, left: 100, width: 200, height: 200} }
  }
}
const mouseClickOnXY = (x, y) => {
  return {
    pageX: x,
    pageY: y,
    target: keypadTargetCoordinates()
  }
}

const CLICK_1 = mouseClickOnXY(150, 136)
const CLICK_5 = mouseClickOnXY(190, 180)
const CLICK_E = mouseClickOnXY(150, 260)

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
  describe('detects keypad pressed', () => {
    const DATASET = [
      {x: 50, y: 136, expected: ''},
      {x: 150, y: 136, expected: '1'},
      {x: 190, y: 136, expected: '2'},
      {x: 230, y: 136, expected: '3'},
      {x: 275, y: 136, expected: ''},
      {x: 150, y: 180, expected: '4'},
      {x: 190, y: 180, expected: '5'},
      {x: 230, y: 180, expected: '6'},
      {x: 150, y: 220, expected: '7'},
      {x: 190, y: 220, expected: '8'},
      {x: 230, y: 220, expected: '9'},
      {x: 150, y: 260, expected: ''},
      {x: 190, y: 260, expected: '0'},
      {x: 230, y: 260, expected: ''},
      {x: 150, y: 30, expected: ''},
      {x: 150, y: 400, expected: ''}
    ]
    DATASET.forEach((data) => {
      it('detects ' + data.expected, () => {
        wrapper.vm.keypadClick(mouseClickOnXY(data.x, data.y))

        expect(vm.combination).to.equal(data.expected)
      })
    })
  })
  it('adds numbers pressed', () => {
    wrapper.vm.keypadClick(CLICK_1)
    wrapper.vm.keypadClick(CLICK_5)

    expect(vm.combination).to.equal('15')
  })
  it('does not exceed 4 numbers', () => {
    wrapper.vm.keypadClick(CLICK_1)
    wrapper.vm.keypadClick(CLICK_5)
    wrapper.vm.keypadClick(CLICK_1)
    wrapper.vm.keypadClick(CLICK_5)
    wrapper.vm.keypadClick(CLICK_1)
    wrapper.vm.keypadClick(CLICK_5)

    expect(vm.combination).to.equal('1515')
  })
  it('removes when pressed E', () => {
    wrapper.vm.keypadClick(CLICK_1)
    wrapper.vm.keypadClick(CLICK_5)

    wrapper.vm.keypadClick(CLICK_E)

    expect(vm.combination).to.equal('')
  })
})
