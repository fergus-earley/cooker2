function ledenable (bool: boolean) {
	
}
function displayenable (bool: boolean) {
	
}
displayenable(false)
ledenable(false)
let strip1 = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P4, 12, NeoPixelMode.RGB)
let strip3 = neopixel.create(DigitalPin.P6, 12, NeoPixelMode.RGB)
let strip4 = neopixel.create(DigitalPin.P7, 12, NeoPixelMode.RGB)
// strip3 = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
// strip4 = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB)
while (true) {
    if (pins.digitalReadPin(DigitalPin.P13) == 1 && pins.digitalReadPin(DigitalPin.P14) == 1 && (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P16) == 1)) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (false) {
    	
    } else {
        strip1.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
    }
}
