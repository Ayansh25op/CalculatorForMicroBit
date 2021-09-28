enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    _1 += 1
    basic.showNumber(_1)
})
input.onButtonPressed(Button.AB, function () {
    if (Unit == 1) {
        basic.showNumber(_1 + _2)
    }
    if (Unit == 2) {
        basic.showNumber(_1 - _2)
    }
    if (Unit == 3) {
        basic.showString("Q= " + _1 / _2 + "," + "R=" + _1 % _2)
    }
    if (Unit == 4) {
        basic.showNumber(_1 * _2)
    }
})
input.onButtonPressed(Button.B, function () {
    _2 += 1
    basic.showNumber(_2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Unit += 1
    soundExpression.slide.playUntilDone()
    if (Unit == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Unit == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Unit == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Unit == 4) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let Unit = 0
let _2 = 0
let _1 = 0
_1 = 0
_2 = 0
Unit = 0
soundExpression.giggle.playUntilDone()
basic.forever(function () {
    if (Unit == 5) {
        Unit = 1
    }
})
