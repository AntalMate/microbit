let index = 0
input.onButtonPressed(Button.A, function () {
    if (index < 5) {
        index += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (index > 0) {
        index += -1
    }
})
basic.forever(function () {
    if (index == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (index == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
    if (index == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            `)
    }
    if (index == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            # # # . .
            `)
    }
    if (index == 4) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            # # # # .
            `)
    }
    if (index == 5) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    }
})
