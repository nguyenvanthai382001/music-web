const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
const prevBtn = document.querySelector(".play-back");
const nextBtn = document.querySelector(".play-forward");
const durationTime = document.querySelector(".duration")
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");

let isPlaying = true;
let indexSong = 0;
const music = ['TallyHallHiddenintheSand.mp3','JoshTurnerYourMan.mp3','JóseanLogChachachá.mp3','AdeleSendMyLoveToYourNewLover.mp3','AdeleSomeoneLikeYou.mp3','AdeleSetFireToTheRainLiveatTheRoyalAlbertHall.mp3'];

//// next song and prev song
song.setAttribute("src", `./music/${music[indexSong]}`);
nextBtn.addEventListener("click",function(){
    changeSong(1);
});
prevBtn.addEventListener("click",function(){
    changeSong(-1);
});
function changeSong(dir){
    if(dir === 1){
        indexSong++;
        if(indexSong >= music.length){
            indexSong = 0;
        }
        isPlaying = true;
    }else if(dir === -1){
        indexSong--;
        if(indexSong < 0){
            indexSong = music.length - 1;
        }
        isPlaying = true;
    }
    song.setAttribute("src", `./music/${music[indexSong]}`);
    playPause();

}

/////pause vs play
playBtn.addEventListener("click",playPause);
function playPause(){
    if(isPlaying){
        song.play();
        isPlaying = false;
        playBtn.innerHTML = '<ion-icon name="pause" class="play-icon play-icon-pause"></ion-icon>'
    }else{
        song.pause();
        isPlaying = true;
        playBtn.innerHTML =  '<ion-icon name="play" class="play-icon "></ion-icon>'
    }
}


function displayTimer() {
    const { duration, currentTime } = song;

    if (!duration) {
      durationTime.textContent = "00:00";
    }
}
  displayTimer();

//   phut thu 5