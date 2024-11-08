const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const modifyNumber = (number) => {
  return number < 10 ? "0" + number : number;
};

const getDate = () => {
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const today = new Date();
  const month = modifyNumber(today.getMonth() + 1);
  const date = modifyNumber(today.getDate());
  const day = week[today.getDay()];
  setDate(month, date, day);
};

const setDate = (month, date, day) => {
  dateElement.textContent = `${month}월 ${date}일 ${day}`;
};

const getTime = () => {
  const today = new Date();
  const hour = modifyNumber(today.getHours());
  const minute = modifyNumber(today.getMinutes());
  const seconds = modifyNumber(today.getSeconds());
  setTime(hour, minute, seconds);
};

const setTime = (hour, minute, seconds) => {
  timeElement.textContent = `${hour} : ${minute} : ${seconds}`;
};

getDate();
getTime();
setInterval(getTime, 1000);
