import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon,BoltIcon, XMarkIcon, MagnifyingGlassIcon,ChevronDownIcon} from '@heroicons/react/24/outline'
import User_context from './Contexts/user_context'
import CircularProgress from '@mui/material/CircularProgress';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {  
  const [user_data , setuser_data] = useContext(User_context)
  const {xp_visible} = user_data
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center font-bold text-lg">
                  Codedamn
                </div>
              </div>
              <div className="hidden w-94 sm:ml-6 sm:block px-1.5 py-1.5 border border-zinc-100 rounded-md ">
                  <div className="flex space-x-4 items-center">
                    <div><MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" /></div>
                    <div><input type="text" placeholder='Search' className='border border-none' /></div>
                    <button className='flex gap-4 bg-zinc-100 px-2 py-2 rounded-md'>Courses <ChevronDownIcon className="h-6 w-6" aria-hidden="true" /> </button>
                  </div>
                </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="flex rounded-full mr-4 p-1 text-gray-400 hover:text-black focus:outline-none"
                >
                  <BoltIcon className="h-6 w-6" fill='blue' stroke='none'  aria-hidden="true" />
                  {
                    xp_visible==false?<div>---</div>:<>2</>
                  }

                </button>
                <button
                  type="button"
                  className="rounded-full p-1 text-gray-400 hover:text-black focus:outline-none"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>    
                      
                        <img
                        className="h-8 w-8 rounded-full"
                        src={user_data.image.img_source}
                        alt=""
                      />
                       
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  )
}
