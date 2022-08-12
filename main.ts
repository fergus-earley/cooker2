function ledenable (bool: boolean) {
	
}
function displayenable (bool: boolean) {
	
}
displayenable(false)
ledenable(false)
let strip1 = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
// strip3 = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
// strip4 = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB)
while (true) {
    if (pins.digitalReadPin(DigitalPin.P13) == 1 && pins.digitalReadPin(DigitalPin.P14) == 1 && pins.digitalReadPin(DigitalPin.P15) == 1) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip1.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
    }
}
