$(".blink").each(function () {
  var elem = $(this);
  setInterval(function () {
    if (elem.css("visibility") == "hidden") {
      elem.css("visibility", "visible");
    } else {
      elem.css("visibility", "hidden");
    }
  }, 500);
});

function updateTime() {
  const hoursEl = document.querySelector("#hour");
  const minutesEl = document.querySelector("#minute");
  const secondsEl = document.querySelector("#second");
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  if (hours >= 0 && hours <= 9) hours = "0" + hours;
  if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
  if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  const dateEl = document.querySelector("#date");
  let date = d.getDate();
  if (date >= 0 && date <= 9) date = "0" + date;
  let month = d.getMonth() + 1;
  if (month >= 0 && month <= 9) month = "0" + month;
  let year = d.getFullYear();
  if (year >= 0 && year <= 9) year = "0" + year;
  dateEl.innerHTML = `${date}/${month}/${year}`;

  const dayEl = document.querySelector("#day");
  let dayNumber = d.getDay();
  let day = "";
  switch (dayNumber) {
    case 1:
      day = "Понедельник";
      break;
    case 2:
      day = "Вторник";
      break;
    case 3:
      day = "Среда";
      break;
    case 4:
      day = "Четверг";
      break;
    case 5:
      day = "Пятница";
      break;
    case 6:
      day = "Суббота";
      break;
    case 7:
      day = "Воскресенье";
      break;
  }
  dayEl.innerHTML = day;
}

window.onload = function () {
  setInterval(updateTime, 1000);
};
