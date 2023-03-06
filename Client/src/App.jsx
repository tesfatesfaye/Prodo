import './App.css'
import {Routes,Route,Link} from "react-router-dom"
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
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
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<DashBoard/>} />
      </Routes>
     
    
    </div>
      </IconContext.Provider>
  )
}

export default App
