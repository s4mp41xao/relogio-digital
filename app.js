const clockContainer = document.querySelector('.clock-container')
const dayContainer = document.querySelector('.day-container')
const periodContainer = document.querySelector('.period-container')

// transform the clock display on HTML span 
const getClockHTML = (hours, minutes, seconds) => `
<span>${(hours)}</span> :
<span>${(minutes)}</span> :
<span>${(seconds)}</span>
`

const updateClock = () => {
  const date = new Date()

  // add 0 if first value is less than 10
  const formatTimeUnit = unit => unit < 10 ? `0${unit}` : unit

  // make 12 hour clock
  const convert12HourClock = unit => unit > 12 ? unit - 12 : unit

  // get hours, minutes, and seconds from "date" and convert units.
  const hours = formatTimeUnit(convert12HourClock(date.getHours()))
  const minutes = formatTimeUnit(date.getMinutes())
  const seconds = formatTimeUnit(date.getSeconds())

  const getPeriod = date.toLocaleString().slice('19', '21')

  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const getDay = weekDays[date.getDay()].toUpperCase()

  // update DOM Elements
  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)
  clockContainer.innerHTML += `<span class="period">${getPeriod}</span>`
  dayContainer.innerHTML = getDay
}

setInterval(updateClock, 1000)