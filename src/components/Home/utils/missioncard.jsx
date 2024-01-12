import React from 'react'

const Missioncard = (props) => {
  return (
    <div className='mb-4 w-[60%] h-[25vh] md:w-1/5 md:h-[40vh] p-2 border rounded-t-[80px] border-red-500'>
        <div className='text-center mb-2'>0{props.id+1}</div>
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