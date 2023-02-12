import { Fragment, useContext, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import User_context from '../Contexts/user_context'
import Edit_data from '../Contexts/Edit_user_data_context'
import AppContext from '../Contexts/App_context'
import styles from '../../styles/education_modal.module.css'
import { nanoid } from 'nanoid'

export default function Example() {
    const [open, setOpen] = useState(true)
    const [input, setinput] = useState({institute:'' , score:'' , location:'' , course:'' , from:'' , end:'' , id:nanoid()})
    const cancelButtonRef = useRef(null)
    const [edit_data , setedit_data] = useContext(Edit_data)
    const [app_data , setapp_data] = useContext(AppContext)

    function handle_input(e){
        let name = e.target.name
        let value = e.target.value
        setinput({...input , [name]:value})
    }

    function save_data(){
        setedit_data({...edit_data , education:[...edit_data.education , input]})
        setapp_data({...app_data , edit_education_modal:false})
    }

    function input_fields(name , placeholder , title , value , type='text'){
        return(

            <div>
                <div>{title}</div>
                <input 
                  type={type}
                  name={name} 
                  value={value} 
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                  onChange={handle_input} 
                  max='100'
                  min='1'
                  minLength="3"
                  id={styles.input_field}
                  required
                  placeholder={placeholder}/>
                </div>
            )
    }

  return (
    <Transition.Root show={app_data.edit_education_modal} as={Fragment}>
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
                  <div className="sm:items-start">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-6">
                        Education Details
                      </Dialog.Title>
                    <form className="grid grid-cols-2 gap-4 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" onSubmit={save_data}>
                        {input_fields('institute' , "Enter Institute Name" , 'Institute' , input.institute)}
                        {input_fields('score' , "Enter your Score in %" , 'Score' , input.score , 'number')}
                        {input_fields('location' , "Enter your Location" , 'Location' , input.location)}
                        {input_fields('course' , "Enter your Course" , 'Course' , input.course)}
                        {input_fields('from' , "Enter start time" , 'From' , input.from , 'date')}
                        {input_fields('end' , "Enter End time" , 'End' , input.end , 'date')}

                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={()=>setapp_data({...app_data , edit_education_modal:false})}
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-purple-600 px-4 py-2 text-base font-medium text-gray-100 shadow-sm hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                </div>
                    </form>
                   
                  </div>
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
