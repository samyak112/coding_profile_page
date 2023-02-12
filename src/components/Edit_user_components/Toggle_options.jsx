import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/toggle_options.module.css'
import {UserCircleIcon , BriefcaseIcon , DocumentTextIcon} from '@heroicons/react/24/outline'
import AppContext from '../Contexts/App_context'

function Toggle_options() {
    const [toggled_option, settoggled_option] = useState(1)
    const [user_data , setuser_data] = useContext(AppContext)
    
    useEffect(()=>{
        setuser_data({...user_data , selected_toggle:toggled_option})
    },[toggled_option])

    function toggled_option_style(selected_option){
        if(selected_option==toggled_option){
            return(
                {width:'50%',
                border: '1px solid black',
                background:'black',
                height: '100%',
                borderTopRightRadius:'10px',
                borderBottomRightRadius:'10px'}
            )
        }
        else{
            return({})
        }
    }

    function toggle_option(option_number){
        if(toggled_option!=option_number){
            settoggled_option(option_number)
        }

    }

  return (
   <div id={styles.main}>
    <div className={styles.option_box} onClick={()=>{toggle_option(1)}}>
        <div className={styles.selected_option_wrap}>
            <div className={styles.selected_option} style={toggled_option_style(1)}></div>
        </div>
        <div className={styles.option_name}> <UserCircleIcon className='h-6 w-6' /> Profile</div>
    </div>
    <div className={styles.option_box} onClick={()=>{toggle_option(2)}}>
        <div className={styles.selected_option_wrap}>
            <div className={styles.selected_option} style={toggled_option_style(2)} ></div>
        </div>
        <div className={styles.option_name}><BriefcaseIcon className='h-6 w-6'/> Socials</div>
    </div>
    <div className={styles.option_box} onClick={()=>{toggle_option(3)}}>
        <div className={styles.selected_option_wrap}>
            <div className={styles.selected_option} style={toggled_option_style(3)} ></div>
        </div>
        <div className={styles.option_name}> <DocumentTextIcon className='h-6 w-6'/> Resume</div>
    </div>
   </div>
  )
}

export default Toggle_options