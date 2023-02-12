import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from '../styles/user_profile.module.css'
import User_context from './Contexts/user_context'
import About from './User_profile_components/About'
import Welcome_modal from './Welcome_modal'
import User_profile_2 from './User_profile_components/User_profile_2'
import AppContext from './Contexts/App_context'

function User_profile() {
  const [user_data , setuser_data] = useContext(User_context)
  const [app_data , setapp_data] = useContext(AppContext)

  const [show_modal, setshow_modal] = useState(false)
  
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      let storage = JSON.parse(localStorage.getItem('dont_ask_again'))
      if(storage==null || storage==false && app_data.is_modal_shown==false){
        setshow_modal(true)
        setapp_data({...app_data , is_modal_shown:true})
      }
    }
    

  },[])
  return (
    <div id={styles.main_wrap}>
        <div id={styles.main}>
          
          <About/>
          {/* // added the toggle buttons in other component so that about component doesnot re renders */}
          <User_profile_2/>
          {show_modal==true?
              <Welcome_modal show_modal/> 
            :
              <>
              </>
          }
        </div>
    </div>
  )
}

export default User_profile