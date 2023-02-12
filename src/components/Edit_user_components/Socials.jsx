import React, { useContext } from 'react'
import styles from '../../styles/socials.module.css'
import Edit_data from '../Contexts/Edit_user_data_context'
import User_context from '../Contexts/user_context'

function Socials() {
    const [edit_data , setedit_data] = useContext(Edit_data)

    const{github_link,linkedin_link,facebook_link,instagram_link,dribble_link,behance_link} = edit_data
    console.log(edit_data)

    function input_fields(field_name , name ,value){
        return(
            <>
                <label htmlFor={field_name} class="block text-sm font-bold">{field_name}</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    </div>
                    <input type='url' name={name} id={field_name} value={value} onChange={handle_input_fields} class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder={`${field_name} profile URL`}/>
                    <div class="absolute inset-y-0 right-0 flex items-center">
                    </div>
                </div>
            </>
        )
    }

    function handle_input_fields(e){
        let name = e.target.name;
        let value = e.target.value;

        setedit_data({...edit_data , [name]:value})
    }
  return (
    <>
    <div className={styles.social_comps}>{input_fields('Github' , 'github_link' , github_link)}</div>
    <div className={styles.social_comps}>{input_fields("LinkedIn", 'linkedin_link', linkedin_link)}</div>
    <div className={styles.social_comps}>{input_fields("Facebook",'facebook_link', facebook_link)}</div>
    <div className={styles.social_comps}>{input_fields("Instagram",'instagram_link', instagram_link)}</div>
    <div className={styles.social_comps}>{input_fields("Dribble",'dribble_link', dribble_link)}</div>
    <div className={styles.social_comps}>{input_fields('Behance', 'behance_link', behance_link)}</div>
    </>
  )
}

export default Socials