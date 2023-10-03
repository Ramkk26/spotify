const songList=[{songname:"Attention",filepath:"songs/1.mp3",coverpath:"images/charlie.png"},
{songname:"Mockingbird",filepath:"songs/1.mp3",coverpath:"images/eminem.png"},
{songname:"Superman",filepath:"songs/2.mp3",coverpath:"images/eminem.png"},
{songname:"Jai jai shiv shankar",filepath:"songs/3.mp3",coverpath:"images/cover2.jpg"},
{songname:"Jhoome jo pathan",filepath:"songs/4.mp3",coverpath:"images/cover1.jpg"},
{songname:"prettier",filepath:"songs/5.mp3",coverpath:"images/bieber.png"},
{songname:"closer",filepath:"songs/6.mp3",coverpath:"images/bieber.png"},
{songname:"mary on cross",filepath:"songs/7.mp3",coverpath:"images/dua.jpg"},
{songname:"mocking bird",filepath:"songs/8.mp3",coverpath:"images/eminem.png"},
{songname:"superman",filepath:"songs/9.mp3",coverpath:"images/eminem.png"},
{songname:"saalam-e-ishq",filepath:"songs/10.mp3",coverpath:"images/bieber.png"},
{songname:"saalam-e-ishq",filepath:"songs/11.mp3",coverPath:"images/bieber.png"},
{songname:"saalam-e-ishq",filepath:"songs/12.mp3",coverPath:"images/charlie.png"},
{songname:"saalam-e-ishq",filepath:"songs/13.mp3",coverPath:"images/bieber.png"},
{songname:"saalam-e-ishq",filepath:"songs/14.mp3",coverPath:"images/charlie.png"},
{songname:"saalam-e-ishq",filepath:"songs/15.mp3",coverPath:"images/charlie.png"},
{songname:"saalam-e-ishq",filepath:"songs/16.mp3",coverPath:"images/charlie.png"}];
const play = document.getElementById("play-btn");
const progessBar = document.querySelector(".progress-bar");
const speaker = document.querySelector(".fa-volume-low");
const volumeBtn = document.querySelector(".volume-btn");
const gif = document.querySelector(".gif");
const musicContent = Array.from(document.querySelectorAll(".music-content"));
const prevBtn =document.getElementById("prev-btn");
const musicPlayer = document.querySelector(".music-player");
const currenttime = document.querySelector(".currenttime");
const time =document.querySelector(".time");
 
// const songPLay = Array.from(document.querySelectorAll("songPLay-btn"));
console.log(musicContent);
console.log(gif);

musicContent.forEach((elem,i)=>{
    elem.getElementsByTagName("img")[0].src=songList[i].coverpath;
    elem.querySelectorAll(".songname")[0].innerHTML=songList[i].songname;
    
});


gif.style.opacity="0";
const song = new Audio("songs/1.mp3");
play.addEventListener("click",(el)=>{
    if(song.paused||song.currentTime==0){
        song.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        Array.from(document.querySelectorAll(".songPLay-btn")).forEach((element) => {
            element.classList.remove("fa-pause-circle");
            element.classList.add("fa-play-circle");
        });    
           console.log(currenttime);

gif.style.opacity="1";
        console.log("play");
    }else{
        song.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        gif.style.opacity="0";
        console.log("stop");
      
    }

  
});


song.addEventListener("timeupdate",()=>{
    progress =parseInt((song.currentTime/song.duration)*100);
progessBar.value=progress;
console.log(progress)
});






const makeplay=()=>{
    Array.from(document.querySelectorAll(".songPLay-btn")).forEach((element) => {

          
            element.classList.add("fa-circle-play");
           
            element.classList.remove("fa-circle-pause");
        console.log(element);
    });
}
Array.from(document.querySelectorAll(".songPLay-btn")).forEach((element) => {
    element.addEventListener("click", (el) => {
        makeplay();
        index = parseInt(el.target.id);
        el.target.classList.remove("fa-circle-play");
        el.target.classList.add("fa-circle-pause");
        const timeDue =  parseFloat(song.duration/100);
       currenttime.innerHTML = timeDue.toPrecision(3);
       time.innerHTML =parseInt((song.currentTime/song.duration));
     
song.src= `songs/${index}.mp3`;
song.currentTime=0;
song.play();
play.classList.remove("fa-play");
play.classList.add("fa-pause");

    });

});

document.getElementById("prev-btn").addEventListener("click",()=>{
    if(index>=9){
        index=0;
      
    }  else{
          index-=1  ; 
    }
    song.src= `songs/${index}.mp3`;
song.currentTime=0;
song.play();
play.classList.remove("fa-play");
play.classList.add("fa-pause");
})
document.getElementById("forward-btn").addEventListener("click",()=>{
    if(index<=0){
        index=0;
      
    }  else{
          index+=1  ; 
    }
    song.src= `songs/${index}.mp3`;
song.currentTime=0;
song.play();
play.classList.remove("fa-play");
play.classList.add("fa-pause");
})

Array.from(document.querySelectorAll(".songPLay-btn")).forEach((element) => {
    element.addEventListener("click", (el) => {
      if(musicPlayer.classList.contains("hide-it")){
        musicPlayer.classList.remove("hide-it");
      }

    });

});

volumeBtn.addEventListener('change', () => {
    const volume = volumeBtn.value / 100;
    song.volume = volume;
    if(volumeBtn.value==0){
        document.querySelector("#mute").classList.remove("fa-volume-low");
        document.querySelector("#mute").classList.add("fa-volume-xmark");
    }else{
        document.querySelector("#mute").classList.add("fa-volume-low");
        document.querySelector("#mute").classList.remove("fa-volume-xmark");
    }
  });
const mute = document.querySelector("#mute");
 mute.addEventListener("click",(el)=>{
    if(song.volume>0){
    mute.classList.remove("fa-volume-low");
    mute.classList.add("fa-volume-xmark");
song.volume=0;
}else{
    mute.classList.add("fa-volume-low");
    mute.classList.remove("fa-volume-xmark");
    const volume = volumeBtn.value / 100;
    song.volume = volume;
}
  })