import Countdown from '@/components/Countdown'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import { whenTrigger } from '../utils'

const TIME_55_MINS_AND_53_SECS = (55 * 60 + 53) * 1000
const TIME_1_MIN = 1 * 60 * 1000

const threeHoursFrom = (now) => {
  const nextDate = new Date()
  nextDate.setTime(now.getTime() + 3 * 60 * 60 * 1000)
  return nextDate
}

describe('Countdown.vue', () => {
  const NOW = new Date()
  const IN_THREE_HOURS = threeHoursFrom(NOW)
  let sandbox
  let clock
  let wrapper
  let vm

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    clock = sinon.useFakeTimers(NOW.getTime())

    wrapper = mount(Countdown)
    vm = wrapper.vm
  })
  afterEach(() => {
    sandbox.restore()
    clock.restore()
  })
  it('sets ups', () => {
    expect(vm.endTime).to.be.null
    expect(wrapper.vm.$options.methods.play).to.be.a('function')
    expect(wrapper.vm.hours).to.equal('-')
    expect(wrapper.vm.minutes).to.equal('-')
    expect(wrapper.vm.seconds).to.equal('-')
    expect(vm.paused).to.equal(true)
  })
  it('sets time 3 hours from now, with a click of playButton', () => {
    whenTrigger('click', '#playButton', wrapper)

    expect(vm.endTime.getTime()).to.equal(IN_THREE_HOURS.getTime())
    expect(vm.now.getTime()).to.equal(NOW.getTime())
    expect(vm.hours).to.equal('3')
    expect(vm.minutes).to.equal('00')
    expect(vm.seconds).to.equal('00')
    expect(vm.paused).to.equal(false)
  })
  it('should say 2-57-50 when 130 secs pass', () => {
    whenTrigger('click', '#playButton', wrapper)
    clock.tick(130000)

    expect(vm.hours).to.equal('2')
    expect(vm.minutes).to.equal('57')
    expect(vm.seconds).to.equal('50')
  })
  it('should say 2-04-07 when 55 mins and 53 secs pass', () => {
    whenTrigger('click', '#playButton', wrapper)
    clock.tick(TIME_55_MINS_AND_53_SECS)

    expect(vm.hours).to.equal('2')
    expect(vm.minutes).to.equal('04')
    expect(vm.seconds).to.equal('07')
  })
  it('should pause', () => {
    whenTrigger('click', '#playButton', wrapper)
    clock.tick(TIME_55_MINS_AND_53_SECS)

    whenTrigger('click', '#pauseButton', wrapper)
    clock.tick(TIME_1_MIN)

    expect(vm.hours).to.equal('2')
    expect(vm.minutes).to.equal('04')
    expect(vm.seconds).to.equal('07')
    expect(vm.paused).to.equal(true)
  })
  it('should resume', () => {
    whenTrigger('click', '#playButton', wrapper)
    clock.tick(TIME_55_MINS_AND_53_SECS)
    whenTrigger('click', '#pauseButton', wrapper)
    clock.tick(TIME_1_MIN)

    whenTrigger('click', '#resumeButton', wrapper)
    clock.tick(TIME_1_MIN)

    expect(vm.hours).to.equal('2')
    expect(vm.minutes).to.equal('03')
    expect(vm.seconds).to.equal('07')
    expect(vm.paused).to.equal(false)
  })
  it('should stop', () => {
    whenTrigger('click', '#playButton', wrapper)
    clock.tick(TIME_55_MINS_AND_53_SECS)

    whenTrigger('click', '#pauseButton', wrapper)
    clock.tick(TIME_1_MIN)

    whenTrigger('click', '#stopButton', wrapper)

    expect(vm.hours).to.equal('-')
    expect(vm.minutes).to.equal('-')
    expect(vm.seconds).to.equal('-')
    expect(vm.paused).to.equal(true)
  })
})
