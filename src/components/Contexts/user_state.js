import default_profile_pic from '../../../public/default_profile_pic.jpg'

const state = {
    name:'Cool Programmer',
    about:null,
    gender:null,
    profession:null,
    dob:null,
    location:null,
    image:{img_source:default_profile_pic.src , is_default:true},
    xp_visible:true,
    follow_visible:true,
    badges_visible:true,
    github_link:null,
    linkedin_link:null,
    youtube_link:null,
    facebook_link:null,
    instagram_link:null,
    dribble_link:null,
    behance_link:null,
    dont_ask_again:false,
    education:[],
    skills:[],
    languages:[],
    interests:[]
  }

  export default state