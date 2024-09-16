import React from 'react'

const Sales = ({text}) => {
  return (
    <div className='flex justify-between items-center mb-4 mt-4'>
        <div>
            <p className='font-semibold text-blue-500 text-left' > {text}</p>
            <p className='font-semibold text-gray-500 text-left'> Associate Vp</p>
        </div>

        <div>
            <p className='font-bold'> Sales Head</p>
        </div>


    </div>
  )
}

export default Sales