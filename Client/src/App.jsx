import './App.css'
import {Routes,Route,Link} from "react-router-dom"
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
function App() {
 
  return (
    <div className="App dark">
      <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    
    </div>
  )
}

export default App
