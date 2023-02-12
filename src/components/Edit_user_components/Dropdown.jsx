import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Edit_data from '../Contexts/Edit_user_data_context'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [edit_data , setedit_data] = useContext(Edit_data)

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className={`inline-flex w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 ${edit_data.gender==null?'text-zinc-400' : ''}`}>
          {
            edit_data.gender==null?
            <>What is your gender
            <ChevronDownIcon className="ml-auto ml-2 h-5 w-5" aria-hidden="true" />
            </>
            :
            <>{edit_data.gender}</>
          }
          
          
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
        <Menu.Items className="z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={()=>{setedit_data({...edit_data , gender:'Male'})}}
                >
                  Male
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={()=>{setedit_data({...edit_data , gender:'Female'})}}

                >
                  Female
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
