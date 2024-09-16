import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
function App() {
 
  return (
    <>
     <div className='w-full h-full p-0'>
      <Navbar></Navbar>
       <div className='flex '>
         <Sidebar></Sidebar>
         <Dashboard></Dashboard>
       </div>
     </div>
       
    </>
  )
}

export default App
