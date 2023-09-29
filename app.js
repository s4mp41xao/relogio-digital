const clockContainer = document.querySelector('.clock-container')
const dayContainer = document.querySelector('.day-container')
const periodContainer = document.querySelector('.period-container')

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const clockHTML = `
  <span>${String(hours).length === 1 ? `0${hours}` : hours}</span>:<span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span>:<span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
  `
  clockContainer.innerHTML = clockHTML

  const getPeriod = present.toLocaleString().slice('19', '21')
  clockContainer.innerHTML += `<span class="period">${getPeriod}</span>`

  const getDay = present.getDay()
  const nameOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const namesOfDaysToUpperCase = nameOfDays[getDay].toUpperCase()
  const day = namesOfDaysToUpperCase
  dayContainer.innerHTML = day
}

setInterval(updateClock, 1000)