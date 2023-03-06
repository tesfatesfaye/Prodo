import './App.css'
import {Routes,Route,Link} from "react-router-dom"
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import General from './Pages/General'
import Completed from './Pages/Completed'
import Today from './Pages/Today'
import DashBoard from './Pages/Dashboard'
import { IconContext } from "react-icons/lib";
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
function App() {
  let location=useLocation()
 useEffect(()=>{
  console.log(location)
 })
  return (
    <IconContext.Provider value={{size:'1.2em',margin:'0'}}>
    <div className="App dark">

      <Routes>
      <Route path='/' element={<DashBoard/>} >
      <Route path="general" element={<General/>}/>
          <Route path="completed" element={<Completed/>}/>
          {/* <Route path="/overdue" element={<Overdue/>}/> */}
          <Route path='today' element={<Today/>}/>
        
        </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
           </Routes>
     
    
    </div>
      </IconContext.Provider>
  )
}

export default App
