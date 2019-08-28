function timer() {
  let endDate = new Date('June 12, 2020')
  let currentDate = new Date()
  console.log(endDate, currentDate)
  let diff = Math.ceil((endDate - currentDate)/3600000/24)
  // let diffSecs = diff/1000 
  // let diffMins = diffSecs/60 
  // let diffHours = diffMins/60 
  // let diffDays = diffHours/24
  console.log(diff)
}

timer()