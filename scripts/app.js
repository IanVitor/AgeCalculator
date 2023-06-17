const form = document.querySelector("#form")

form.addEventListener("submit", (e) =>{
  e.preventDefault()
  calcAge()
})

function calcAge(){
  let data = getAge()
  let date = new Date()

  data.year = date.getFullYear() - data.year
  
  if(data.month > date.getMonth()+1){
    data.month = 12 + date.getMonth() + 1 - data.month
    data.year -= 1
  } else {
    data.month = date.getMonth() + 1 - data.month
  }

  if(data.day > date.getDate()){
    data.day = 31 + date.getDate() - data.day
    data.month -= 1
  } else {
    data.day = date.getDate() - data.day
  }

  console.log(date.getDate())

  setAge(data.day, data.month, data.year)

}
function getAge(){
  let day = document.querySelector("#day")
  let month = document.querySelector("#month")
  let year = document.querySelector("#year")

  let age = {
    day: day.value,
    month: month.value,
    year: year.value,
  }

  return age
}

function setAge(day, month, year){
  let dayContent = document.querySelector("#dayResult span")
  let monthContent = document.querySelector("#monthResult span")
  let yearContent = document.querySelector("#yearResult span")

  dayContent.textContent = day
  monthContent.textContent = month
  yearContent.textContent = year
}

function showError(){
  window.alert('erro')
}