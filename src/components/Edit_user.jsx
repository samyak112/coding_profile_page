import React, { useContext } from 'react'
import styles from '../styles/edit_user.module.css'
import Toggle_options from '../components/Edit_user_components/Toggle_options'
import Toggled_option from './Edit_user_components/Toggled_option'
import AppContext from './Contexts/App_context'
import state from './Contexts/user_state'
import User_context from './Contexts/user_context'
import Edit_data from './Contexts/Edit_user_data_context'

function Edit_user() {
  const [edit_data , setedit_data] = useContext(Edit_data)
  const [user_data , setuser_data] = useContext(User_context)
  const [app_data , setapp_data] = useContext(AppContext)
  

  function save_data(){
    localStorage.setItem('user_data',JSON.stringify(edit_data))
    setapp_data({...app_data , data_save:app_data.data_save+1 , edit_info:false})
    console.log(edit_data)
  }

  function cancel_change(){
    setedit_data(user_data)
    setapp_data({...app_data , edit_info:false})
  }

  return (
    <div id={styles.main_wrap}>
      <div id={styles.main}>
        <div id={styles.toggle_comps_wrap}>
              <Toggle_options/>
          </div>
          <div id={styles.toggled_comp}>
              <Toggled_option/>
              <div className={styles.save_or_cancel}>

              <button onClick={save_data} class="bg-purple-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
                    Save Changes
                </button>
                <button onClick={cancel_change} class="bg-zinc-200 hover:bg-zinc-300 text-white font-semibold py-2 px-4 rounded text-black">
                    Cancel
                </button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Edit_user