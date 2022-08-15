const deadline = '2022-10-20';

const getTimeDeadline = (end) => {
  const time = Date.parse(end) - Date.parse(new Date());

  let days, hours, minutes, seconds;

  if (time <= 0) {
    days = 0, hours = 0, minutes = 0, seconds = 0;
  } else {
    days = Math.floor(time / (1000 * 60 * 60 * 24)),
      hours = Math.floor((time / (1000 * 60 * 60) % 24)),
      minutes = Math.floor((time / (1000 / 60) % 60)),
      seconds = Math.floor((time / 1000) % 60);
  }

  return {
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
  }
}

const getZero = (num) => num >= 0 && num < 10 ? `0${num}` : num;

const setClock = (end) => {
  const
    days = document.querySelector('#timerDays'),
    hours = document.querySelector('#timerHours'),
    minutes = document.querySelector('#timerMinutes'),
    seconds = document.querySelector('#timerSeconds');

  const updateClock = () => {
    const time = getTimeDeadline(end);

    days.innerHTML = getZero(time.days);
    hours.innerHTML = getZero(time.hours);
    minutes.innerHTML = getZero(time.minutes);
    seconds.innerHTML = getZero(time.seconds);

    time <= 0 ? clearInterval(interval) : false;
  }

  updateClock();

  const interval = setInterval(updateClock, 1000);
}

getTimeDeadline(deadline);
setClock(deadline);
