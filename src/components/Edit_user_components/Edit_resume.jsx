import React, { useContext, useState } from 'react'
import styles from '../../styles/edit_resume.module.css'
import Edit_data from '../Contexts/Edit_user_data_context'
import {XMarkIcon , PlusIcon , TrashIcon} from '@heroicons/react/24/outline'
import Edit_education_modal from './Edit_education_modal'
import AppContext from '../Contexts/App_context'
function Edit_resume() {
    const [edit_data , setedit_data] = useContext(Edit_data)
    const [app_data , setapp_data] = useContext(AppContext)
    const [entered_value, setentered_value] = useState({Skills:'' , Languages:'' , Interests:''})
    const available_skills = ['HTML 5' , 'CSS 3' , 'Javascript' , 'NodeJs' , 'React' , 'Next.js' , 'MongoDB']
    const available_languages = ['Hindi' , 'English' , 'Spanish' , 'Marathi' , 'Japanese' , 'Mandarin' , 'Estonian' , 'Korean']
    const [open_modal, setopen_modal] = useState(false)

    function add_data_to_resume(name ,elem , original_array){
        if(name!='Interests'){
            let name_value = name.toLowerCase()
            if(!original_array.some(value => value === elem)){
                setedit_data({...edit_data , [name_value]:[...original_array , elem]})
            }
        }
        else{
            if(!edit_data.interests.some(value => value === entered_value.Interests)){
                setedit_data({...edit_data , interests:[...edit_data.interests , entered_value.Interests]})
            }
        }
    }

    function handle_input(e){
        let name = e.target.name
        let value = e.target.value
        setentered_value({...entered_value , [name]:value})
    }

    function current_resume_data(original_array , name){
        return(
            <div className={styles.content}>
                {
                    original_array.length==0? <div className={styles.empty_Data}>No {name} added yet</div>:
                    original_array.map((elem,index)=>{
                        let paramater = name.toLowerCase()
                        return(
                            <>
                            <div key={index} className={styles.skill_box}>{elem} <XMarkIcon onClick={()=>{
                                setedit_data({...edit_data , [paramater]:original_array.filter(value => value != elem)});}} className='h-4 w-4 cursor-pointer'/></div>
                            </>
                        )
                    })
                }
            </div>
        )
    }

    function resume_fields(title , name , entered_value , respective_array , original_array){
        return(
            <>
                <div className={styles.heading}>{title}</div>
                <div className={styles.search_box}>
                    <input 
                        type="text" 
                        name={name} 
                        value={entered_value} 
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                        onChange={handle_input} 
                        placeholder={`Enter ${name} Name`}/>
                </div>

                <div className={styles.search_results_box}>
                    {
                    entered_value==''
                        ?
                        <></>
                        :
                        respective_array.filter((respective_array)=>respective_array.toLowerCase().startsWith(entered_value)).map((elem,index)=>{
                            return(
                                <div key={index} className={styles.search_result} onClick={()=>{add_data_to_resume(name , elem,original_array)}}>{elem}</div>
                            )
                        })
                    }
                </div>

                {current_resume_data(original_array , name)}
            </>
        )
    }

    return (
    <div id={styles.main}>
        <div className={styles.heading}>Education</div>
        <button onClick={()=>{setapp_data({...app_data , edit_education_modal:true})}} class={`flex bg-purple-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2}`}>
                Add Education
            </button>
        <div className={styles.content}>
            {
                edit_data.education.length==0? <div className={styles.empty_Data}>No Institutes added yet</div>:
                edit_data.education.map((elem,index)=>{
                    const {institute , score , from , end , location , course,id} = elem
                    return(
                        <>
                        <div key={index} className={styles.details_box}>
                            <div className={styles.left_comp}>
                                <div className={styles.company_logo_wrap}>
                                    <img className={styles.company_logo} src="/harvard.png" alt="" />
                                </div>
                            </div>
                            <div className={styles.right_comp}>
                                <div className={styles.company_name}>{institute}</div>
                                <div className={styles.location_and_time}>
                                    <div className={styles.location}>{location} - {course}</div>
                                    <div className={styles.duration}>{from} - {end}</div>
                                </div>
                                <div className={styles.score}>
                                    {score}% <TrashIcon onClick={()=>{setedit_data({...edit_data , education:edit_data.education.filter(value => value.id != id)})}} className='h-6 w-6 cursor-pointer'/>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        {resume_fields('Tech Skills' , 'Skills' , entered_value.Skills , available_skills , edit_data.skills)}

        {resume_fields('Languages' , 'Languages' , entered_value.Languages , available_languages , edit_data.languages)}

        <div className={styles.heading}>Interests</div>
        <div className={styles.search_box} id={styles.add_interest_wrap}>
            <input 
            type="text" 
            name='Interests'
            value={entered_value.Interests} 
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
            onChange={handle_input} 
            placeholder='Enter any Interests'/>
            <button onClick={()=>{add_data_to_resume('Interests')}} class={`bg-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 ${entered_value.Interests=='' ?'disabled:opacity-100 pointer-events-none' : ''}`}>
                <PlusIcon className='h-6 w-6'/>
            </button>
        </div>
        {current_resume_data(edit_data.interests , 'Interests')}
        {app_data.edit_education_modal==true?<Edit_education_modal/>:<></>}
        
        
    </div>
  )
}

export default Edit_resume