let audioElement  = new Audio('songs/1.mp3');
let mainPlay = document.querySelector(".mainPlay");
let nextSong = document.querySelector(".fa-step-forward");
let prevSong = document.querySelector(".fa-step-backward");
let i = 1;
let myProgressBar = document.querySelector(".progress");
let songs = [
    'songs/1.mp3','songs/2.mp3','songs/3.mp3','songs/4.mp3','songs/5.mp3','songs/6.mp3','songs/7.mp3','songs/8.mp3','songs/9.mp3','songs/10.mp3'
];
let songItem = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

let gif = document.querySelector(".gif");
let customSong = document.querySelector(".customSong");
mainPlay.addEventListener("click",()=>{
    if(audioElement.paused){
        audioElement.play();
        mainPlay.classList.remove('fa-play');
        mainPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        mainPlay.classList.remove('fa-pause');
        mainPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
});
nextSong.addEventListener("click",()=>{
    if(audioElement.src == 'http://127.0.0.1:5500/songs/10.mp3') i = 1;
    else i++;

    let audioSource = `songs/${i}.mp3`;
        audioElement.src = audioSource;
        audioElement.play();
        mainPlay.classList.remove('fa-play');
        mainPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
        customSong.innerText = songItem[i-1].songName;
});
prevSong.addEventListener("click",()=>{
    if(audioElement.src == 'http://127.0.0.1:5500/songs/1.mp3') i = 10;
    else i--;
    let audioSource = `songs/${i}.mp3`;
        audioElement.src = audioSource;
        audioElement.play();
        mainPlay.classList.remove('fa-play');
        mainPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
        customSong.innerText = songItem[i-1].songName;
});

let songList = [];
for (let i = 0; i < 10; i++) {
    songList.push(document.querySelector(`.song${i}`));
}

songList.forEach((song, index) => {
    song.addEventListener("click", () => {
        if (audioElement.paused) {
            let i = index + 1;
            let audioSource = `songs/${i}.mp3`;
            audioElement.src = audioSource;
            audioElement.play();
            song.classList.remove('fa-play');
            song.classList.add('fa-pause');
            gif.style.opacity = 1;
            mainPlay.classList.remove('fa-play');
            mainPlay.classList.add('fa-pause');
        } else {
            audioElement.pause();
            song.classList.remove('fa-pause');
            song.classList.add('fa-play');
            gif.style.opacity = 0;
            mainPlay.classList.remove('fa-pause');
            mainPlay.classList.add('fa-play');
        }
        customSong.innerText = songItem[index].songName;
    });
});
audioElement.addEventListener('timeupdate', ()=>{ 
    let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (audioElement.duration*myProgressBar.value)/100;
});