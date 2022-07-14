//Functions blender
let blenderState = 'off';
const blenderSound = document.getElementById('blender-sound');
const blenderButton = document.getElementById('blender-button-sound');
const blender = document.getElementById('blender');

function blenderControl() {
    if (blenderState == 'off') {
        blenderState = 'on';
        blender.classList.add('active');
} else {
    blenderState = 'off';
    blender.classList.remove('active');
    }
}

function noise (){
    if( blenderSound.paused ) {
        blenderButton.play();
        blenderSound.play();
        navigator.vibrate([99999])
    } else {
        blenderButton.play();
        blenderSound.pause();
        navigator.vibrate(0)
        blenderSound.currentTime = 0;
    }
}