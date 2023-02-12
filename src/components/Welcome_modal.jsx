import { Fragment, useContext, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Checkbox from '@mui/material/Checkbox';
import AppContext from './Contexts/App_context';
import User_context from './Contexts/user_context';


export default function Example() {
  const [open, setOpen] = useState(true)
  const [app_data , setapp_data] = useContext(AppContext)
  const [user_data , setuser_data] = useContext(User_context)
  const cancelButtonRef = useRef(null)
  const [is_button_checked, setis_button_checked] = useState(false)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=>null}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        <img src="/modal_image.jpg" alt="" />
                        Not Enough Data
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Looks like there is not so much data in your profile right now, want to add some data?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className=" bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-600 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {setapp_data({...app_data , edit_info:true}); localStorage.setItem('dont_ask_again',is_button_checked)}}
                  >
                    Edit Profile Data
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {setOpen(false); localStorage.setItem('dont_ask_again',is_button_checked)} }
                    ref={cancelButtonRef}
                  >
                    Continue Viewing Profile
                  </button>
                    
                </div>
                <div className='items-start'>
                        <Checkbox onClick={()=>{
                            if(is_button_checked==false){
                                setis_button_checked(true)
                            }
                            else{
                                setis_button_checked(false)
                            }
                        }}  checked={is_button_checked} />
                        Dont ask again
                    </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
