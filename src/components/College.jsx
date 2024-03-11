import React from 'react'
import { IemPage } from '.'

export const College = ({para,para2}) => {
    console.log({para2});
  return (
    <div className='flex flex-col h-96 place-content-between'>
        <img className='ci w-96 bg-cover' src={para} />
        <IemPage nmae={para2} />
    </div>
  )
}

export default College
