import React from 'react'
import { BookmarkPlus } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { RotateCcw } from 'lucide-react';

const Header = () => {
  return (
    <div className='p-3 flex-col border-b-2 border-gray-500 gap-x-3 w-[100%] '>
      <div className='flex items-center space-x-2 text-gray-500 text-sm font-semibold'>
            <p>Dashboard</p>
            <span>/</span>
            <p>Lead</p>
            <span>/</span>
            <p>LE-10071</p>
            </div>

      <div className='flex justify-between mt-2'>
          <div>  
          <p className='font-bold text-3xl'>LE-10071</p>
        </div>
        <div className='flex justify-center items-center '>
           <div>
             <BookmarkPlus />
            </div>
           <div className='ml-2'>
            
           </div>
           <div className='ml-2'>
           <UserRound />
           </div>
           <div className='ml-2'>
            
           </div>
           <div className='ml-2'>
           <RotateCcw />
           </div>
       </div>
      </div>


    </div>
  )
}

export default Header