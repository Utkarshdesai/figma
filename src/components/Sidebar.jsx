import React from 'react'
import { Logs } from 'lucide-react';
import { Pin } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import { Building } from 'lucide-react';
import { Contact } from 'lucide-react';
import { BetweenHorizontalEnd } from 'lucide-react';
import { ChartColumnBig } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='flex-col justify-between mt-3 items-center gap-y-7 gap-x-2 border-r-2 border-solid border-gray-400 h-[800px] pr-4  '>
        <div className='mb-4'> 
          <Logs />
        </div>

        <div className='mb-4 '>
        <Pin />
        </div>

        <div className='mb-4 '>
        <BriefcaseBusiness />
        </div>

        <div className='mb-4 '>
        <Building />
        </div>

        <div className='mb-4 '>
        <Contact />
        </div>

        <div className='mb-4 '>
        <BetweenHorizontalEnd />
        </div>

        <div className='mb-4 '>
        <ChartColumnBig />
        </div>


    </div>
  )
}

export default Sidebar