import React from 'react'

export const Card1 = ({sem1}) => {
  return (
   <div  className={`card  w-52 flex items-center justify-start ${
      sem1 === "1st semester"
         ? "bg-blue-500"
         : "bg-green-400"
          }`
         }>Semester 1</div> 
  )
}
export const Card2 = ({sem2}) => {
  return (
    <div  className={`card  w-52 flex items-center justify-start ${
      sem2 === "2nd semester"
         ? "bg-blue-500"
         : "bg-green-400"
          }`
         }>Semester 2</div>
  )
}
export const Card3 = ({sem3}) => {
  return (
    <div  className={`card  w-52 flex items-center justify-start ${
      sem3 === "3rd semester"
         ? "bg-blue-500"
         : "bg-green-400"
          }`
         }>Semester 3</div>
  )
}
export const Card4 = ({sem4}) => {
  return (
    <div  className={`card  w-52 flex items-center justify-start ${
      sem4 === "4th semester"
         ? "bg-blue-500"
         : "bg-green-400"
          }`
         }>Semester 4</div>
  )
}
export const Card5 = ({sem5}) => {
  return (
    <div  className={`card  w-52 flex items-center justify-start ${
      sem5 === "5th semester"
         ? "bg-blue-500"
         : "bg-green-400"
          }`
         }>Semester 5</div>
  )
}
export const Card6 = ({sem6}) => {
  return (
    <div  className={`card  w-52 flex items-center justify-start ${
      sem6 === "6th semester"
         ? "bg-blue-500"
         : "bg-green-400"
          }`
         }>Semester 6</div>
  )
}
export const Card7 = ({sem7}) => {
  return (
    <div  className={`card  w-52 flex items-center justify-start ${
      sem7 === "7th semester"
         ? "bg-blue-500"
         : "bg-green-400"
          }`
         }>Semester 7</div>
  )
}
export const Card8 = ({sem8}) => {
  return (
    <div  className={`card  w-52 flex items-center justify-start ${
      sem8 === "8th semester"
         ? "bg-blue-500"
         : "bg-green-400"
          }`
         }>Semester 8</div>
  )
}

