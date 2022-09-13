import Player from '@vimeo/player';
// имортируем названия скрипта с пекендж джейсон
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// переменная для удобства для функции videoplayer-current-time
const timekey = 'videoplayer-current-time';

player.on('timeupdate', durationSavelocalstorage);
// создали функцию, с помощью деструктаризации вытащили секунды собьекта тайм апдейт(записали в локальное хранилище)

function durationSavelocalstorage({ seconds }) {
  localStorage.setItem(timekey, seconds);
}
// при перезагрузки страницы перезагружался плеер

window.addEventListener('load', newStart);
player.on('timeupdate', Throttle(durationSavelocalstorage, 1000));
function newStart() {
  if (!localStorage.getItem(timekey)) {
    return;
  }
}
const currentVideoTime = localStorage.getItem(timekey);
player
  .setCurrentTime(currentVideoTime)
  .then(() => {
    player.play();
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
