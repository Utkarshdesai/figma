import React from 'react'
import Header from './Header'
import Fieldtag from './Fieldtag'
import Contact from './Contact'
import History from './History'
import Log from './Log'

const Dashboard = () => {
  return (
    <div className='border-left border-solid border-black'>
        <Header></Header>
        <Fieldtag></Fieldtag>
        <div className='flex '>
           <Contact></Contact>
          
        </div>

    </div>
  )
}

export default Dashboard