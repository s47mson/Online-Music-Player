const songs = [
  "bensound-anewbeginning.mp3",
  "bensound-clearday.mp3",
  "bensound-creativeminds.mp3",
  "bensound-dance.mp3",
  "bensound-dreams.mp3",
  "bensound-dubstep.mp3",
  "bensound-endlessmotion.mp3",
  "bensound-happiness.mp3",
  "bensound-moose.mp3",
  "bensound-perception.mp3"
]

const createSongList = ()=> {
  const list = document.createElement('ol')

  for(let i = 0; i<songs.length; i++){
    const item = document.createElement('li')
    item.appendChild(document.createTextNode(songs[i]))

    list.appendChild(item)
  }
  return list
}

document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e)=> {
  const clickedItem = e.target
  const source = document.getElementById('source')
  source.src = './music/' + clickedItem.innerText

  document.getElementById('currentlyPlayingSong').innerText = 'Currently Playing : '
  document.getElementById('currentSong').innerText = clickedItem.innerText
  
  player.load()
  player.play()
}

const playAudio = ()=> {
  if(player.readyState){
    player.play()
  }
}
const pauseAudio = ()=> {
  player.pause()
}

const slider = document.getElementById('volumeSlider')
slider.oninput = (e)=>{
  const volume = e.target.value
  player.volume = volume
}

const updateProgress = ()=>{
  if(player.currentTime > 0){
    const progressBar = document.getElementById('progress')
    console.log(progressBar.value + " progress bar value")
    console.log(player.currentTime + " current time")
    console.log(player.duration + " duration")
    progressBar.value = (player.currentTime / player.duration) * 100
  }
}