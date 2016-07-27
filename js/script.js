/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */

/* 
   var temps = 25;
   var sec_in_minutes = 60;
   var minuteurMin;
   var minuteurSec;
*/

var temps = 25;
var sec_in_min = 60;
var minuteur_minute;
var minuteur_sec;
var pausetime;
var stoptimer;

document.getElementById('play').onclick = lanceMinuteur;
document.getElementById('pause').onclick = pauseMinuteur;
document.getElementById('stop').onclick = stopMinuteur;

function lanceMinuteur() {
    minuteur_minute = temps;
    minuteur_sec = 0;
    pausetime = setInterval(decrementSec, 1000);
    //console.log("yo");
}
function pauseMinuteur() {
    clearInterval(pausetime);
}
function stopMinuteur() {
    setTimeout(stoptimer);
}

function Mise_a_jour_interface() {
    document.getElementById('timer').innerHTML = minuteur_minute + ':' + minuteur_sec;
}

function decrementSec() {
    if (minuteur_sec === 0 && minuteur_minute !== 0) {
        minuteur_sec = 59;
        minuteur_minute--;
    } else {
        minuteur_sec--;
    }
    if (minuteur_sec === 0 && minuteur_minute === 0) {

        alert("FINI!");
    }
    //function stop

    Mise_a_jour_interface();
    //console.log(minuteur_sec);
    //console.log(minuteur_minute);
}
        // et lance function pause()
        //lanceMinuteur = clearTimeout('pauseMinuteur()', 100)
