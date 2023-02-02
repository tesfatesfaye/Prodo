import './App.css'
import {Routes,Route,Link} from "react-router-dom"
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import DashBoard from './Pages/Dashboard'

function App() {
 
  return (
    <div className="App dark">

      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<DashBoard/>} />
      </Routes>
    
    </div>
  )
}

export default App
