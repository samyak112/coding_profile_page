import React, { useContext } from 'react'
import styles from '../../styles/toggled_option.module.css'
import AppContext from '../Contexts/App_context'
import Edit_resume from './Edit_resume'
import Profile from './Profile'
import Socials from './Socials'

function Toggled_option() {

  const [user_data , setuser_data] = useContext(AppContext)

  function Toggle_options(){
    switch (user_data.selected_toggle) {
      case 1:
        return(<Profile/>)
        break;
      case 2:
        return(<Socials/>)
        break;
      case 3:
        return(<Edit_resume/>)
        break;
      default:
        return(<Profile/>)
    }
  }

  return (
    <div id={styles.main}>
      {Toggle_options()}
    </div>
  )
}

export default Toggled_option