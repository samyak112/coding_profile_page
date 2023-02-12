import '@/styles/globals.css'
import AppContext from '@/components/Contexts/App_context'
import User_context from '@/components/Contexts/user_context';
import { useState } from 'react';
import user_state from '@/components/Contexts/user_state';
import app_state from '@/components/Contexts/app_state';
import Edit_data from '@/components/Contexts/Edit_user_data_context';

export default function App({ Component, pageProps }) {

  const [user_data, setuser_data] = useState(user_state)
  const [edit_data, setedit_data] = useState(user_state)
  const [app_data, setapp_data] = useState(app_state)
  
  return (
    <User_context.Provider value={[user_data, setuser_data]}>
    <Edit_data.Provider value={[edit_data, setedit_data]}>
    <AppContext.Provider value={[app_data , setapp_data]}>
      <Component {...pageProps} />
    </AppContext.Provider>
    </Edit_data.Provider>
    </User_context.Provider>
  );
}
