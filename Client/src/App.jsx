import './App.css'
import { useContext } from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import DashBoard from './Pages/Dashboard'
import { IconContext } from "react-icons/lib";
import { Context } from './Context/Context'
import Tasks from './Components/Tasks'
import { dateInfoTitle } from './utils/utilities'
function App() {
    const {dueToday,tasks,completedTasks}=useContext(Context)
  return (
    <IconContext.Provider value={{size:'1.2em',margin:'0'}}>
    <div className="App dark">

      <Routes>
      <Route path='/' element={<DashBoard/>} >
      <Route path="general" element={<Tasks tasks={tasks} pageTitle="General"/>}/>
          <Route path="completed" element={<Tasks tasks={completedTasks} pageTitle="Completed"/>}/>
          <Route path="/overdue" element={<Tasks pageTitle="Overdue"/>}/>
          <Route path='today' element={<Tasks tasks={dueToday} pageTitle="Today" currentDay={dateInfoTitle}/>}/>
        
        </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
           </Routes>
     
    
    </div>
      </IconContext.Provider>
  )
}

export default App
