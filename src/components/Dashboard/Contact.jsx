import React from 'react'
import Sales from '../../common/Sales'

const Contact = () => {
  return (
    <div className='flex-col p-3 w-[50%]'>
      <div className='flex items-center justify-between mb-5'> 
        <p className='before:content-["•"] before:mr-1 text-orange-600 text-md'> Contacted </p>
        <p className='text-gray-500'> pending action </p>
      </div>

      <div className='flex items-center justify-between mb-5'>
        <p className='font-bold text-2xl ' > Mamta naik </p>
        <div className='text-green-300 font-semibold  bg-green-100 justify-center items-center p-2 rounded-md' >
            Create Account
        </div>
        <div className='text-orange-300 font-semibold bg-orange-100 justify-center items-center p-2 rounded-md'>
            Create conatct
        </div>
      </div>
      <div className='text-gray-400 text-left'>
      
        aniruddha naik 
     
      </div>

      <div className='flex gap-x-3 mt-6 border-t-2 border-b-2 border-gray-300 text-gray-500 font-normal py-4 text-semibold font-Poppins'>
        <p className='text-bold'> basic detail </p>
        <p className='text-bold' > Account detail </p>
        <p className='text-bold'>  Lead detail </p>
        <p className='text-bold'> Teams </p>
        <p className='text-bold'> Other contact </p>
      </div>

      {/* section last */}

       <div className='flex-col mt-4 '>
        <div className='flex'> 
              <div >
                <p className='font-bold text-left'>Account</p>
                <input
                
                className='p-2 mt-3 mr-6 border border-gray-400 rounded  w-[200px]'
                placeholder='Select options'
                />
                </div>

                <div className='ml-4 '>  
                <p className='font-bold text-left'>Contact</p>
                <input
                className='p-2 mt-3 border border-gray-400 rounded w-[200px]'
                placeholder='Enter contact details'
                />
                </div>
        </div>

        <div>
            <Sales text = 'Pranav biryani'></Sales>
            <Sales text = 'Nayan Joyal '></Sales>
        </div>
   


        
      
      </div>

      


    </div>
  )
}

export default Contact