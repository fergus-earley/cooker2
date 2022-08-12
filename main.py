def ledenable(bool2: bool):
    pass
def displayenable(bool3: bool):
    pass
displayenable(False)
strip1 = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
# strip3 = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
# strip4 = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB)
while True:
    if pins.digital_read_pin(DigitalPin.P4) == 1 and pins.digital_read_pin(DigitalPin.P6) == 1:
        strip1.show_color(neopixel.colors(NeoPixelColors.RED))
        strip2.show_color(neopixel.colors(NeoPixelColors.RED))
    else:
        strip1.show_color(neopixel.colors(NeoPixelColors.GREEN))
        strip2.show_color(neopixel.colors(NeoPixelColors.GREEN))