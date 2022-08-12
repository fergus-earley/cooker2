led.enable(false)
let strip1 = neopixel.create(DigitalPin.P4, 12, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P6, 12, NeoPixelMode.RGB)
let strip3 = neopixel.create(DigitalPin.P7, 12, NeoPixelMode.RGB)
let strip4 = neopixel.create(DigitalPin.P9, 12, NeoPixelMode.RGB)
// strip3 = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
// strip4 = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB)
while (true) {
    if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && pins.digitalReadPin(DigitalPin.P3) == 1)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && pins.digitalReadPin(DigitalPin.P3) == 1)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 1 && pins.digitalReadPin(DigitalPin.P3) == 1)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 0 && pins.digitalReadPin(DigitalPin.P3) == 1)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip3.showColor(neopixel.colors(NeoPixelColors.Black))
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && pins.digitalReadPin(DigitalPin.P3) == 0)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
        strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 0 && pins.digitalReadPin(DigitalPin.P3) == 0)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip3.showColor(neopixel.colors(NeoPixelColors.Black))
        strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 1 && pins.digitalReadPin(DigitalPin.P3) == 0)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
        strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 0 && pins.digitalReadPin(DigitalPin.P3) == 1)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip3.showColor(neopixel.colors(NeoPixelColors.Black))
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 1 && pins.digitalReadPin(DigitalPin.P3) == 1)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 0 && pins.digitalReadPin(DigitalPin.P3) == 1)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip3.showColor(neopixel.colors(NeoPixelColors.Black))
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && pins.digitalReadPin(DigitalPin.P3) == 0)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
        strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 0 && pins.digitalReadPin(DigitalPin.P3) == 0)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip3.showColor(neopixel.colors(NeoPixelColors.Black))
        strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 0 && pins.digitalReadPin(DigitalPin.P3) == 0)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip3.showColor(neopixel.colors(NeoPixelColors.Black))
        strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 1 && pins.digitalReadPin(DigitalPin.P3) == 0)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
        strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 0 && pins.digitalReadPin(DigitalPin.P3) == 1)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip3.showColor(neopixel.colors(NeoPixelColors.Black))
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip1.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip3.showColor(neopixel.colors(NeoPixelColors.Black))
        strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    }
}
