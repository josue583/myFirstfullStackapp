// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import User from "./component/getuser.jsx";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Add from "./component/createUser.jsx"
function App() {
  // const [count, setCount] = useState(0)

  return (
  
     <div className='w-full min-h-screen bg-gray-200 flex justify-center items-center'>
      {/* <h1 className=''>This is react part</h1> */}
      <Router>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      </Router>
      
      
     </div>
  )
}

export default App
