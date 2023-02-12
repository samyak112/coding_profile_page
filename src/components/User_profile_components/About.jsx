import React, { useContext, useEffect } from 'react'
import styles from '../../styles/about.module.css'
import {MapPinIcon , ClipboardDocumentIcon} from '@heroicons/react/24/outline'
import AppContext from '../Contexts/App_context'
import User_context from '../Contexts/user_context'

function About() {
  const [app_data , setapp_data] = useContext(AppContext)
  const [user_data , setuser_data] = useContext(User_context)
  const{name,image,location,profession, linkedin_link ,facebook_link , instagram_link, youtube_link , dribble_link ,behance_link ,skills} = user_data
  return (

    <div id={styles.main}>
        <div id={styles.cover_photo_container} className={styles.main_comps}>
          <img  id={styles.cover_photo} src='/default_cover.png' alt="cover_photo" />
        </div>
        <div id={styles.about_user} className={styles.main_comps}>
          <div className={styles.about_user_comps} id={styles.about_user_left}>
            <div id={styles.user_image_wrap}>
              <img id={styles.user_image} src={image.img_source} alt="profile pic" />
            </div>
          </div>
          <div className={styles.about_user_comps} id={styles.about_user_right}>
            <div className={styles.about_user_right_comps} id={styles.user_name}>
              {name}
            </div>
            <div className={styles.about_user_right_comps} id={styles.designation}>
              {profession}
            </div>
            <div className={styles.about_user_right_comps} id={styles.location}>
              <MapPinIcon className="h-6"/> {location==null?<>Not Specified</>:{location}}
            </div>
            <div className={styles.about_user_right_comps} id={styles.skills}>
              {
                skills.length==0?<div className={styles.empty}>Skills not specified yet</div>:
                skills.map((elem,index)=>{
                  return(
                    <div key={index} className={styles.skill_box}>{elem}</div>

                  )
                })
              }
            </div>
            <div className={styles.about_user_right_comps} id={styles.socials_wrap}>
              <div id={styles.socials}>
                <div id={styles.social_links_box}>
                <div className={styles.social_box}>
                  <img className={styles.social_image} src='/google.png' alt="social image" />
                </div>
                <a href={instagram_link} className={styles.social_box}>
                  <img className={styles.social_image} src='/Instagram.png' alt="social image" />
                </a>
                <a href={linkedin_link} className={styles.social_box}>
                  <img className={styles.social_image} src='/LinkedIn.png' alt="social image" />
                </a>
                <a href={youtube_link} className={styles.social_box}>
                  <img className={styles.social_image} src='/YouTube.png' alt="social image" />
                </a>
                <a href={facebook_link} className={styles.social_box}>
                  <img className={styles.social_image} src='/Facebook.png' alt="social image" />
                </a>
                </div>
                <div id={styles.social_contact_box}>
                  <button className="bg-zinc-100 hover:bg-zinc-200 text-white font-bold py-2 px-2 rounded mr-4">
                    <ClipboardDocumentIcon className='h-6 w-6' color='black'/>
                  </button>
                  <button className="bg-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 md:text-sm md:px-2 sm:text-xs">
                    Contact
                  </button>
                  <button onClick={()=>{setapp_data({...app_data , edit_info:true})}} className="bg-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded md:text-sm md:px-2 sm:text-xs">
                    Edit Profile
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About