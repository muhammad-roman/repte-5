basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
