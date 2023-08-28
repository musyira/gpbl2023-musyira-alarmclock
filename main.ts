radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
radio.onReceivedString(function (receivedString) {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
})
radio.setGroup(100)
