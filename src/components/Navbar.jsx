import React from 'react'
import { Settings } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Calendar } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='justify-between flex items-center p-2 bg-violet-700' >
         
         <div className='flex gap-x-5 justify-center items-center '>
             <div> 
             <AlignJustify /> </div>
             <div > 
                <p className='font-Popins text-2xl font-bold'> Test </p>
             </div>
         </div>

         <div className='flex gap-x-5 justify-center it'>
             <div>  <Search /> </div>
              <div className='border-r-2 border-solid border-gray-400 h-[25px]'></div>
             <div> 
             <Settings/>
             </div>
             <div>  <Bell/> </div>
             <div> <Calendar /> </div>
             <div className='border-r-2 border-solid border-gray-400 h-[25px]'></div>
             
             
         </div>
    </div>
  )
}

export default Navbar