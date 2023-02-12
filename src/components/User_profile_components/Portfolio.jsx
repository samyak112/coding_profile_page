import React, { useContext } from 'react'
import styles from '../../styles/portfolio.module.css'
import User_context from '../Contexts/user_context'

function Portfolio() {
    const [user_data , setuser_data] = useContext(User_context)
    let {xp_visible , badges_visible} = user_data

    const stats = [
        {icon:'/streak.png' , title:'Longest Streak' , value:2 ,tag:'streak'},
        {icon:'/experience.png' , title:'Experience Points' , value:2 , tag:'xp'},
        {icon:'/cup.png' , title:'Current League' , value:'Novice' , tag:'league'},
        {icon:'/karma_points.png' , title:'Karma Points' , value:2 , tag:'karma'}
    
    ]
  return (
    <div id={styles.main}>
        <div className={styles.main_comps} id={styles.stats_wrap}>
            <div className={styles.top_part}>
                <div className={styles.heading}>Stats</div>
            </div>
            <div className={styles.content}>
                {
                    stats.map((elem , index)=>{
                        let {title , icon , value , tag} = elem
                        if( tag=='xp' && xp_visible==false || tag=='league' && badges_visible==false){
                            value = '---'
                        }
                        return(
                            <div key={index} className={styles.stats_content_comps}>
                                <div className={styles.stats_content_left}>
                                    <img src={icon} alt={title} />
                                </div>
                                <div className={styles.stats_content_right}>
                                    <div className={styles.comp_heading}>{
                                        value
                                    }</div>
                                    <div className={styles.subheading}>{title}</div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
        <div className={styles.main_comps} id={styles.projects_wrap}>
            <div className={styles.top_part}>
                <div className={styles.heading}>Projects</div>
                <div className={styles.create_new}>Create New Project</div>
            </div>
            <div className={styles.content}>
                <div className={styles.projects_content_comps}>
                    <div className={styles.project_top_part}>
                        <img className={styles.project_image} src="/project_image.png" alt="" />
                    </div>
                    <div className={styles.project_bottom_part}>
                        <div className={styles.project_name}>Personal Website</div>
                        <div className={styles.project_technologies}>
                            <img src="/react.png" alt="" /> React 
                        </div>
                    </div>
                </div>
                {/* <div className={styles.projects_content_comps}>
                    <div className={styles.project_top_part}>
                        <img className={styles.project_image} src="/project_image.png" alt="" />
                    </div>
                    <div className={styles.project_bottom_part}>
                        <div className={styles.project_name}>Personal Website</div>
                        <div className={styles.project_technologies}>
                            some language
                        </div>
                    </div>
                </div>
                <div className={styles.projects_content_comps}>
                    <div className={styles.project_top_part}>
                        <img className={styles.project_image} src="/project_image.png" alt="" />
                    </div>
                    <div className={styles.project_bottom_part}>
                        <div className={styles.project_name}>Personal Website</div>
                        <div className={styles.project_technologies}>
                            some language
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        <div className={styles.main_comps} id={styles.playgrounds_wrap}>
            <div className={styles.top_part}>
                <div className={styles.heading}>Playgrounds</div>
                <div className={styles.create_new}>Create New Playground</div>
            </div>
            <div className={styles.content}>
                <div className={styles.stats_content_comps}>
                    <div className={`${styles.stats_content_left} ${styles.playground_image_wrap}`}>
                        <img className={styles.playground_image} src="/html_icon.png" alt="streak icon" />
                    </div>
                    <div className={styles.stats_content_right}>
                        <div className={styles.comp_heading}>Playground Title</div>
                        <div className={styles.subheading}>Longest Streak</div>
                    </div>
                </div>
                <div className={styles.stats_content_comps}>
                    <div className={`${styles.stats_content_left} ${styles.playground_image_wrap}`}>
                        <img className={styles.playground_image} src="/html_icon.png" alt="streak icon" />
                    </div>
                    <div className={styles.stats_content_right}>
                        <div className={styles.comp_heading}>2</div>
                        <div className={styles.subheading}>Longest Streak</div>
                    </div>
                </div>
                <div className={styles.stats_content_comps}>
                    <div className={`${styles.stats_content_left} ${styles.playground_image_wrap}`}>
                        <img className={styles.playground_image} src="/html_icon.png" alt="streak icon" />
                    </div>
                    <div className={styles.stats_content_right}>
                        <div className={styles.comp_heading}>2</div>
                        <div className={styles.subheading}>HTML/CSS - 1min ago</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.main_comps} id={styles.cetrificates_wrap}>
            <div className={styles.top_part}>
                <div className={styles.heading}>Certificates</div>
                <div className={styles.create_new}>Add New Certificate</div>
            </div>
            <div className={styles.content}>
                <div className={styles.certi_comps}>
                    <div className={styles.certi_image_wrap}><img src="/react_icon.svg" alt="" /></div>
                    <div className={styles.comp_heading}>React JS</div>
                    <div className={styles.certi_issue_date}>Issued on Dec 16th,2022</div>
                    <div className={styles.certi_creds}>See Credentials</div>
                </div>
                <div className={styles.certi_comps}>
                    <div className={styles.certi_image_wrap}><img src="/react_icon.svg" alt="" /></div>
                    <div className={styles.comp_heading}>React JS</div>
                    <div className={styles.certi_issue_date}>Issued on Dec 16th,2022</div>
                    <div className={styles.certi_creds}>See Credentials</div>
                </div>
                <div className={styles.certi_comps}>
                    <div className={styles.certi_image_wrap}><img src="/react_icon.svg" alt="" /></div>
                    <div className={styles.comp_heading}>React JS</div>
                    <div className={styles.certi_issue_date}>Issued on Dec 16th,2022</div>
                    <div className={styles.certi_creds}>See Credentials</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio