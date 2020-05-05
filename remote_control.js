devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
})
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P13, 1023)
})
devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
})
devices.onGamepadButton(MesDpadButtonInfo._1Up, function () {
    pins.digitalWritePin(DigitalPin.P15, 1)
})
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
})
devices.onGamepadButton(MesDpadButtonInfo._2Down, function () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
})
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
})
devices.onGamepadButton(MesDpadButtonInfo._2Up, function () {
    pins.digitalWritePin(DigitalPin.P15, 1)
})
pins.digitalWritePin(DigitalPin.P15, 1)
pins.digitalWritePin(DigitalPin.P16, 1)
