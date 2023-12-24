import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import { gapi } from 'gapi-script'
import { useEffect } from 'react'

function App() {


  return (
    <>
      <Routes>
          <Route  path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
