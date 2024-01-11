import React from 'react'

const Missioncard = (props) => {
  return (
    <div className='w-1/5 h-[40vh] p-2 border rounded-t-[80px] border-red-500 mb-4'>
        <div className='text-center mb-2'>{props.id}</div>
        <div className='font-bold text-center mb-2'>
            {props.title}
        </div>
        <p className='text-center'>
            {props.text}
        </p>
    </div>
  )
}

export default Missioncard