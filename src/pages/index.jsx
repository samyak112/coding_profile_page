import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/navbar'
import User from '../components/User_profile'
import Edit_user from '@/components/Edit_user'
import { useContext, useEffect, useState } from 'react'
import AppContext from '@/components/Contexts/App_context'
import Welcome_modal from '../components/Welcome_modal'
import User_context from '@/components/Contexts/user_context'
import Edit_data from '@/components/Contexts/Edit_user_data_context'

export default function Home() {
  const [app_data , setapp_data] = useContext(AppContext)
  const [user_data , setuser_data] = useContext(User_context)
  const [edit_data , setedit_data] = useContext(Edit_data)

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      let storage = JSON.parse(localStorage.getItem('user_data'))

      if(storage!=null){
        setuser_data(storage)
        setedit_data(storage)
      }
    }
  },[app_data.data_save])

  return (
    <>
      <Head>
        <title>Profile Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div id={styles.navbar}>
          <Navbar/>
        </div>
       <div id={styles.body}>
          {app_data.edit_info==false?
          <User/>
          :          
          <Edit_user/>}
       </div>
      </main>
    </>
  )
}