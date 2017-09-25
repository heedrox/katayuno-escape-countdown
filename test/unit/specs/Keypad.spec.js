import Keypad from '@/components/Keypad'
import { mount } from 'avoriaz'

const TIME_1_SEC = 1000

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
const CLICK_6 = mouseClickOnXY(230, 180)
const CLICK_E = mouseClickOnXY(150, 260)
const HASH_1616 = '$2a$10$Bt0aWaFK7TQY3KsCmW9CquU.5PxS8jcm174lklUHPSkbEzm5ZeLjC'
const CLICK_1616 = [CLICK_1, CLICK_6, CLICK_1, CLICK_6]

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
        wrapper.vm.relativeKeyboardCoords = [20, 12, 80, 85]
        wrapper.vm.keypadClick(mouseClickOnXY(data.x, data.y))

        expect(vm.combination).to.equal(data.expected)
      })
    })
  })
  describe('with different keyboard coords', () => {
    const DATASET = [
      {x: 150, y: 130, expected: ''},
      {x: 185, y: 155, expected: '1'},
      {x: 205, y: 155, expected: '2'},
      {x: 225, y: 155, expected: '3'},
      {x: 305, y: 155, expected: ''},
      {x: 185, y: 180, expected: '4'},
      {x: 205, y: 180, expected: '5'},
      {x: 225, y: 180, expected: '6'},
      {x: 185, y: 205, expected: '7'},
      {x: 205, y: 205, expected: '8'},
      {x: 225, y: 205, expected: '9'},
      {x: 185, y: 230, expected: ''},
      {x: 205, y: 230, expected: '0'},
      {x: 225, y: 230, expected: ''},
      {x: 250, y: 130, expected: ''},
      {x: 250, y: 300, expected: ''}
    ]
    DATASET.forEach((data) => {
      it('detects ' + data.expected, () => {
        wrapper.vm.relativeKeyboardCoords = [40, 25, 70, 75]
        wrapper.vm.keypadClick(mouseClickOnXY(data.x, data.y))

        expect(vm.combination).to.equal(data.expected)
      })
    })
  })
  it('adds numbers pressed', () => {
    wrapper.vm.relativeKeyboardCoords = [20, 12, 80, 85]

    wrapper.vm.keypadClick(CLICK_1)
    wrapper.vm.keypadClick(CLICK_5)

    expect(vm.combination).to.equal('15')
  })
  it('does not exceed 4 numbers', () => {
    wrapper.vm.relativeKeyboardCoords = [20, 12, 80, 85]

    wrapper.vm.keypadClick(CLICK_1)
    wrapper.vm.keypadClick(CLICK_5)
    wrapper.vm.keypadClick(CLICK_1)
    wrapper.vm.keypadClick(CLICK_5)
    wrapper.vm.keypadClick(CLICK_1)
    wrapper.vm.keypadClick(CLICK_5)

    expect(vm.combination).to.equal('1515')
  })
  it('removes when pressed E', () => {
    wrapper.vm.relativeKeyboardCoords = [20, 12, 80, 85]

    wrapper.vm.keypadClick(CLICK_1)
    wrapper.vm.keypadClick(CLICK_5)

    wrapper.vm.keypadClick(CLICK_E)

    expect(vm.combination).to.equal('')
  })
  describe('checks combination', () => {
    it('checks when length<4', () => {
      wrapper.vm.relativeKeyboardCoords = [20, 12, 80, 85]

      wrapper.vm.keypadClick(CLICK_1)
      wrapper.vm.keypadClick(CLICK_5)

      expect(vm.wrongNumber).to.equal(false)
      expect(vm.rightNumber).to.equal(false)
    })
    it('checks when wrong', () => {
      wrapper.vm.relativeKeyboardCoords = [20, 12, 80, 85]

      wrapper.vm.keypadClick(CLICK_1)
      wrapper.vm.keypadClick(CLICK_5)
      wrapper.vm.keypadClick(CLICK_1)
      wrapper.vm.keypadClick(CLICK_5)

      expect(vm.wrongNumber).to.equal(true)
    })
    describe('when right combination', () => {
      beforeEach(() => {
        wrapper.vm.relativeKeyboardCoords = [20, 12, 80, 85]

        wrapper.vm.combinationHash = HASH_1616
      })
      it('sets right number', () => {
        CLICK_1616.forEach((click) => {
          wrapper.vm.keypadClick(click)
        })

        expect(vm.combination).to.equal('1616')
        expect(vm.rightNumber).to.equal(true)
      })
      it('opens door after 1 sec', () => {
        let sandbox = sinon.sandbox.create()
        let clock = sinon.useFakeTimers()

        CLICK_1616.forEach((click) => {
          wrapper.vm.keypadClick(click)
        })

        expect(vm.openDoor).to.equal(false)
        clock.tick(TIME_1_SEC)
        expect(vm.openDoor).to.equal(true)

        sandbox.restore()
        clock.restore()
      })
    })
  })
})
