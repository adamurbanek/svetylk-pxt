// let strip = neopixel.create(DigitalPin.P15, 60, NeoPixelMode.RGB)

// // strip.showColor(neopixel.hsl(240, 99, 50));
// // strip.show();

// let rbg = 0;
// let strom = 0;
// let strom2 = 1;
// strip.showRainbow(0, 360);

// basic.forever(function(){
//     rbg += 5;
//     strip.showColor(neopixel.hsl(rbg, 99, 50));
//     // strom += 2;
//     // strom2 += 2;
//     // strip.setPixelColor(strom, neopixel.hsl(110, 99, 50));
//     // strip.setPixelColor(strom2, neopixel.hsl(220, 99, 50));
//     strip.show();
// })



function ping(
    trig: DigitalPin, 
    echo: DigitalPin,
    maxCmDistance = 500): number {
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);
        let duration = pins.pulseIn(echo, PulseValue.High, 1/340 * 10);

        return duration;
    }

basic.forever(function() {
    let sekundy = ping(DigitalPin.P2, DigitalPin.P8) / 1000000;
    let metry = sekundy * 340;
    console.logValue("vzdalenost", metry);
    console.logValue("Cas", sekundy);
    basic.pause(250);
})