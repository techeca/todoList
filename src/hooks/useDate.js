import {useState} from 'react'

export default function useDate(){
  const actualDate = new Date()
  const [day, setDay] = useState(actualDate.getDate())
  const [month, setMonth] = useState(actualDate.getMonth() + 1)
  const [year, setYear] = useState(actualDate.getFullYear())
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  function generateActualDate(){
    setDay(actualDate.getDate())
    setMonth(actualDate.getMonth())
    setYear(actualDate.getFullYear())
  }

  function generateCustomDate(d, m, y){
    if(d !== day)setDay(d)
    if(m !== month)setMonth(m)
    if(y !== year)setYear(y)
  }

  function getPrettyDate(){
    return `${months[month - 1]} ${day}, ${year}`
  }

  function getDaysInMonth(){
    return new Date(year, month, 0).getDate()
  }

  return {
    day,
    month,
    year,
    months,
    getPrettyDate,
    getDaysInMonth,
    generateCustomDate,
    generateActualDate
  }
}
