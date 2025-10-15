const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const progress = document.getElementById('progress');
const progressFilled = document.getElementById('progress-filled');
const timeDisplay = document.getElementById('time');
const lyricsBox = document.getElementById('lyrics');
const lyrics = Array.from(lyricsBox.getElementsByTagName('span'));

const volumeSlider = document.getElementById('volume');
const muteBtn = document.getElementById('mute');

audio.volume = 0.4;
volumeSlider.value = 0.4;
let lastVolume = 0.5;
let currentLine = -1;

// 재생/일시정지
function togglePlay(){
  if(audio.paused){
    audio.play();
    playBtn.textContent = "⏸ 일시정지";
  } else {
    audio.pause();
    playBtn.textContent = "▶ 재생";
  }
}
playBtn.addEventListener('click', togglePlay);

// 가사 싱크 & 중앙 스크롤
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  progressFilled.style.width = (currentTime/audio.duration)*100 + '%';

  const minutes = Math.floor(currentTime/60);
  const seconds = Math.floor(currentTime%60).toString().padStart(2,'0');
  timeDisplay.textContent = `${minutes}:${seconds}`;

  for(let i=0;i<lyrics.length;i++){
    const start = parseFloat(lyrics[i].dataset.start);
    const end = (i+1<lyrics.length)?parseFloat(lyrics[i+1].dataset.start):audio.duration;
    if(currentTime>=start && currentTime<end && currentLine!==i){
      lyrics[currentLine]?.classList.remove('highlight');
      lyrics[i].classList.add('highlight');
      lyrics[i].scrollIntoView({behavior:'smooth', block:'center'});
      currentLine=i;
      break;
    }
  }
});

// 프로그레스바 클릭
progress.addEventListener('click', e=>{
  audio.currentTime = (e.offsetX/progress.clientWidth)*audio.duration;
});

// 볼륨 조절
volumeSlider.addEventListener('input', e=>{
  const vol=parseFloat(e.target.value);
  audio.volume=vol;
  lastVolume = vol>0?vol:lastVolume;
  muteBtn.textContent = vol===0?'🔇':'🔊';
  volumeSlider.style.background = `linear-gradient(to right, #f4a261 ${vol*100}%, #ddd ${vol*100}%)`;
});

// 음소거
muteBtn.addEventListener('click', ()=>{
  if(audio.volume>0){
    lastVolume=audio.volume;
    audio.volume=0;
    volumeSlider.value=0;
    muteBtn.textContent='🔇';
    volumeSlider.style.background='linear-gradient(to right, #f4a261 0%, #ddd 0%)';
  } else {
    audio.volume=lastVolume;
    volumeSlider.value=lastVolume;
    muteBtn.textContent='🔊';
    volumeSlider.style.background=`linear-gradient(to right, #f4a261 ${lastVolume*100}%, #ddd ${lastVolume*100}%)`;
  }
});

// 스페이스바 재생/일시정지
document.addEventListener('keydown', e=>{
  if(e.code==="Space"){ e.preventDefault(); togglePlay(); }
});

// 초기 슬라이더 배경
volumeSlider.style.background = `linear-gradient(to right, #f4a261 ${volumeSlider.value*100}%, #ddd ${volumeSlider.value*100}%)`;
