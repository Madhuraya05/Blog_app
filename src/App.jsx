import { useState ,useEffect} from 'react'
import {useDispatch} from "react-redux"
import authService from './appwrite/auth'
import { login, logOut } from './store/authSlice'
import Header from './component/Header/Header.jsx'
import Footer from './component/Footer/Footer.jsx'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login(userData))
      }else{
        dispatch(logOut())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading ?(
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header/>
          <main>
          todo : {/* Outlet */}
          </main>
          <Footer/>
        </div>
      </div>
    ): null
}

export default App
