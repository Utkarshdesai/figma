import React from 'react'
import {data} from '../../data'

const Fieldtag = () => {
    console.log(data)
  return (
    <div className='p-3 flex gap-x-2 items-center border-b-2 border-gray-500'>
        {
        data.map((item) => (
          <div className='flex justify-between items-center bg-gray-200 p-2 rounded-md w-full' key={item.id}> 
            <div className='mx-auto w-[160px]'>
              {item.status}
            </div> 
          </div>
        ))
      }
    </div>
  )
}

export default Fieldtag