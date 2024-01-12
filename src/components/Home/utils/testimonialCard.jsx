import React from 'react'

const testimonialCard = ({img_link,member_name,member_position ,quotes ,title,desc}) => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
      <div className="md:w-1/3 p-4">
        <div className="text-center md:text-start text-sm">Diaspora Member:  </div>
        <div className='text-center md:text-start text-red-500 mb-4'>{member_name}</div>
        <div className="text-center md:text-starttext-sm">Job Position:  </div>
        <div className='text-center md:text-start text-red-500 mb-4'>{member_position}</div>
       
        <p className="mb-4 mt-10">
        "
        {quotes}"
        </p>
      </div>

      <div className="md:w-1/3 mb-8">
        <img src={`../../../../public/assets/${img_link}`} className="rounded-full border"></img>
      </div>
      <div className="md:w-1/3 flex flex-col  justify-center items-center px-4 ">
        <div className="text-center mb-4 font-bold">
            {title}
       </div>
       <div className="text-center">
        {desc}
       </div>
      </div>
    </div>
  </>
  )
}

export default testimonialCard