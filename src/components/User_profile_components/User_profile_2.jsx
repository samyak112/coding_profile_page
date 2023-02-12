import React, { useState } from 'react'
import styles from '../../styles/user_profile_2.module.css'
import Portfolio from './Portfolio'
import Resume from './Resume'

function User_profile_2() {
  const [toggled_comp, settoggled_comp] = useState(2)

  function change_button_style(button_id){
    if(button_id==toggled_comp){
      return (
        {background:'#EEF2FF', color:'#4338CA'}
      )
    }
    else{
      return(
        {background:'transparent'}
      )
    }
  }

  function hover_option(option,e){
    if(option!=toggled_comp){
      e.target.style.background = '#f4f4f5'
    }
    
  }

  function hover_off(option,e){
    if(option!=toggled_comp){
      e.target.style.background = 'transparent'
    }
  }

  return (
    <>
      <div id={styles.toggle_info}>
        <button className={styles.toggle_buttons} style={change_button_style(1)} onMouseOut={(e)=>{hover_off(1,e)}} onMouseOver={(e)=>{hover_option(1,e)}} onClick={()=>{
          if(toggled_comp==2){
            settoggled_comp(1)
          }
          }}>Portfolio</button>
        <button className={styles.toggle_buttons} style={change_button_style(2)} onMouseOut={(e)=>{hover_off(2,e)}} onMouseOver={(e)=>{hover_option(2,e)}} onClick={()=>{
          if(toggled_comp==1){
            settoggled_comp(2)
          }
        }}>Resume</button>
      </div>
      <div id={styles.toggled_option_data}>
        {
          toggled_comp==1?<Portfolio/>:<Resume/>
        }
      </div>
    </>
  )
}

export default User_profile_2