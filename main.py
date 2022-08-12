def ledenable(bool2: bool):
    pass
def displayenable(bool3: bool):
    pass
led.enable(False)
strip1 = neopixel.create(DigitalPin.P4, 12, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P6, 12, NeoPixelMode.RGB)
strip3 = neopixel.create(DigitalPin.P7, 12, NeoPixelMode.RGB)
strip4 = neopixel.create(DigitalPin.P9, 12, NeoPixelMode.RGB)
# strip3 = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
# strip4 = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB)
while True:
    if pins.digital_read_pin(DigitalPin.P0) == 1 and pins.digital_read_pin(DigitalPin.P1) == 1 and (pins.digital_read_pin(DigitalPin.P2) == 1 and pins.digital_read_pin(DigitalPin.P3) == 1):
        strip1.show_color(neopixel.colors(NeoPixelColors.RED))
        strip2.show_color(neopixel.colors(NeoPixelColors.RED))
        strip3.show_color(neopixel.colors(NeoPixelColors.RED))
        strip4.show_color(neopixel.colors(NeoPixelColors.RED))
    else:
        strip1.show_color(neopixel.colors(NeoPixelColors.GREEN))
        strip2.show_color(neopixel.colors(NeoPixelColors.GREEN))
        strip3.show_color(neopixel.colors(NeoPixelColors.GREEN))
        strip4.show_color(neopixel.colors(NeoPixelColors.GREEN))