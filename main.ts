input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Pitchfork)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Skull)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Duck)
})
