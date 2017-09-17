export const addHours = (hours, date) => {
  const newDate = new Date()
  newDate.setTime(date.getTime() + hours * 60 * 60 * 1000)
  return newDate
}

export const addSecs = (secs, date) => {
  const newDate = new Date()
  newDate.setTime(date.getTime() + secs * 1000)
  return newDate
}

export const diffHours = (endDate, startDate) => {
  return Math.floor((endDate.getTime() - startDate.getTime()) / 3600000)
}

export const diffMinutes = (endDate, startDate) => {
  const totalHours = (endDate.getTime() - startDate.getTime()) / 3600000
  const roundHours = diffHours(endDate, startDate)
  const remainingHours = totalHours - roundHours
  return Math.floor(remainingHours * 60)
}

export const diffSeconds = (endDate, startDate) => {
  const totalHours = (endDate.getTime() - startDate.getTime()) / 3600000
  const roundHours = diffHours(endDate, startDate)
  const roundMinutes = diffMinutes(endDate, startDate)
  const remainingSeconds = totalHours - roundHours - (roundMinutes / 60)
  return Math.floor(remainingSeconds * 60 * 60)
}
