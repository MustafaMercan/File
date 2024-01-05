import './App.css'
import RenderNavigation from './structure/RenderNavigation'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/auth/AuthWrapper'

function App() {

  const {authentication} = useContext(AuthContext);
  useEffect(() => {
    //authentication();
    //console.log('app js');
},[])

  return (
    <>
      <RenderNavigation/>
    </>
  )
}
export default App
