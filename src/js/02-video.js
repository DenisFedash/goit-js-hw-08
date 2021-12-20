import Player from '@vimeo/player';
import throttle from "lodash/throttle";


const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(() => {
  player.getCurrentTime().then((sec) => {
    console.log(sec);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(sec));
  })
}, 1000)
);

const timeToStart =
  JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;
  console.log(timeToStart);
  player.setCurrentTime(timeToStart);


