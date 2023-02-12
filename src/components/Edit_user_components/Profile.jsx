import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/profile.module.css'
import Dropdown from '../Edit_user_components/Dropdown'
import Switch from '@mui/material/Switch';
import User_context from '../Contexts/user_context'
import Edit_data from '../Contexts/Edit_user_data_context';
import default_profile_pic from '../../../public/default_profile_pic.jpg'


function Profile() {
    const [edit_data , setedit_data] = useContext(Edit_data)
    const [is_button_disabled, setis_button_disabled] = useState(true)
    
    useEffect(()=>{
        if(edit_data.image.is_default==true){
            setis_button_disabled(true)
        }
        else{
            setis_button_disabled(false)
        }
    },[edit_data.image])

    function handle_input_field(e){
        let name = e.target.name
        let value;
        if(name=='image'){
            value = e.target.files[0]
            setedit_data({...edit_data , [name]:{img_source:URL.createObjectURL(value) , is_default:false}})
            
        }
        else{
            value = e.target.value
            setedit_data({...edit_data , [name]:value})
        }

    }

    function handle_input_switch(e,value){
        let name = e.target.name;
        if(value==true){
            setedit_data({...edit_data , [name]:false})
        }
        else{

            setedit_data({...edit_data , [name]:true})
        }

    }
    console.log(edit_data.xp_visible)
    

    function input_fields(field_name , Display_name , value , input_type='text'){
        return(
            <>
                <label htmlFor={field_name} className="block text-sm font-bold">{Display_name}</label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    </div>
                    <input type={input_type} name={field_name} onChange={handle_input_field} value={value} id={field_name} className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder={`Enter ${field_name}`}/>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                    </div>
                </div>
            </>
        )
    }

    function delete_image(){
        setedit_data({...edit_data , image:{img_source:default_profile_pic.src , is_default:true}})
    }

  return (
    <div id={styles.main}>
        <div className={styles.main_comps} id={styles.image_details}>
            <div id={styles.image_details_left}>
                <div className={styles.user_image}>
                    <img src={edit_data.image.img_source} alt="" />
                </div>
            </div>
            <div id={styles.image_details_right}>
                
                <label className="bg-purple-700 hover:bg-blue-600 cursor-pointer text-white font-bold py-2 px-2 rounded mr-4" htmlFor="upload_image">
                    Upload New Picture
                </label>
                <input onChange={handle_input_field} name='image' type="file" id='upload_image' className={styles.upload_image_box} />
                <button disabled={is_button_disabled} onClick={delete_image} className={`bg-zinc-200 hover:bg-zinc-300 text-white font-semibold py-2 px-2 rounded text-black ${is_button_disabled==true ? 'disabled:opacity-50 pointer-events-none' : ''}`}>
                    Delete
                </button>
            </div>
            
            
        </div>
        <div className={styles.main_comps}>
            {input_fields('name' ,'Display Name' , edit_data.name)}
        </div>
        <div className={styles.main_comps}>
            <label htmlFor='about' className="block text-sm font-bold">About</label>
            <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                </div>
                <textarea type="text" onChange={handle_input_field} value={edit_data.about} name='about' id='about' className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder='About'/>
                <div className="absolute inset-y-0 right-0 flex items-center">
                </div>
            </div>
        </div>
        <div className={styles.main_comps}>
            {input_fields('profession' , 'Profession' , edit_data.profession )}
        </div>
        <div className={styles.main_comps}>
            {input_fields('dob' , 'Date of Birth' , edit_data.dob,'date')}
        </div>
        <div className={styles.main_comps}>
            <label htmlFor='gender' className="block text-sm font-bold">Gender</label>
            <Dropdown/>
        </div>
        <div className={styles.main_comps}>
            <div id={styles.heading}>Section Visibility</div>
            <div className={styles.sub_heading}>Select which sections and content should show on your profile page.</div>
            <div id={styles.options_wrap}>
                <div className={styles.options}>
                    <div className={styles.options_left_part}>
                        <div className={styles.heading_1}>Followers and Following</div>
                        <div className={styles.sub_heading}>Shows your followers and the users you follow on codedamn</div>
                    </div>
                    <div className={styles.options_right_part}><Switch name='follow_visible' onClick={(e)=>{handle_input_switch(e,edit_data.follow_visible)}} checked={edit_data.follow_visible} /></div>
                </div>
                <div className={styles.options}>
                    <div className={styles.options_left_part}>
                        <div className={styles.heading_1}>XP</div>
                        <div className={styles.sub_heading}>Shows the XP you earned</div>
                    </div>
                    <div className={styles.options_right_part}><Switch name='xp_visible' onClick={(e)=>{handle_input_switch(e,edit_data.xp_visible)}} checked={edit_data.xp_visible} /></div>
                </div>
                <div className={styles.options}>
                    <div className={styles.options_left_part}>
                        <div className={styles.heading_1}>Achievement Badges</div>
                        <div className={styles.sub_heading}>Shows your relative percentile and proficiency</div>
                    </div>
                    <div className={styles.options_right_part}><Switch name='badges_visible' onClick={(e)=>{handle_input_switch(e,edit_data.badges_visible)}} checked={edit_data.badges_visible} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile