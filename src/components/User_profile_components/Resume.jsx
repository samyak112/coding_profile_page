import React, { useContext } from 'react'
import styles from '../../styles/resume.module.css'
import User_context from '../Contexts/user_context'

function Resume() {
    const [user_data , setuser_data] = useContext(User_context)
    const {about,education , skills, languages , interests} = user_data


    function return_data(array,title){
        return(
            <>
            <div  className={styles.heading_type_2}>{title}</div>
            <div className={styles.small_boxes_wrap}>
                {
                    array.length==0?<div className={styles.empty}>Not specified yet</div>:
                    array.map((elem,index)=>{
                        return(
                            <div key={index} className={styles.small_boxes}>{elem}</div>
                            )
                        })
                }
            </div>
            </>
        )
    }
  return (
    <div id={styles.main}>
        <div className={styles.main_comps} id={styles.about}>
            <div className={styles.heading_type_1}>About me</div>
            <div id={styles.about_content}>{about=='' || about==null?<div className={styles.empty}>Not specified yet</div>:about}
            </div>
        </div>
        <div className={styles.main_comps} id={styles.experience}>
            <div className={styles.heading_type_1}>Work Experience</div>
            <div className={styles.details_box}>
                <div className={styles.left_comp}>
                    <div className={styles.company_logo_wrap}>
                        <img className={styles.company_logo} src="/Google_2.png" alt="" />
                    </div>
                </div>
                <div className={styles.right_comp}>
                    <div className={styles.company_name}>Front-end developer at Google</div>
                    <div className={styles.location_and_time}>
                        <div className={styles.location}>London - Google Inc.</div>
                        <div className={styles.duration}>May 2021 - Present</div>
                    </div>
                    <div className={styles.role}>
                    This role would be great for a web developer with 3+ years experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.main_comps} id={styles.education}>
            <div className={styles.heading_type_2}>Education</div>
            {
                education.length==0?<div className={styles.empty}>Not specified yet</div>:
                education.map((elem,index)=>{
                    const {institute , score , from , end , location , course,id} = elem
                    return(
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
                                <div className={styles.role}>
                                    {score}%
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
        {return_data(skills , 'Tech Skills')}
        {return_data(interests , 'Interests')}
        {return_data(languages , 'Languages')}
    </div>
  )
}

export default Resume