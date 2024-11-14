import { AiOutlineSetting } from 'react-icons/ai'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

// Navigation items
const navigation = [
  { name: 'Portfolio', to: '#', current: false },
  { name: 'Docs', to: '/docs', current: false },
  { name: 'About', to: '/about', current: false }
]

// Utility function to join class names
function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar () {
  return (
    <Disclosure as='nav' className='bg-gray-900 navbar w-screen z-50'>
      <div className='mx-auto max-w-full px-2 sm:px-6 lg:px-8 bottomGlow'>
        <div className='relative flex h-16 items-center justify-between'>
          {/* Mobile Menu Button */}
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <DisclosureButton
              className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-label='Open main menu'
            >
              <Bars3Icon
                aria-hidden='true'
                className='block h-6 w-6 group-data-[open]:hidden'
              />
              <XMarkIcon
                aria-hidden='true'
                className='hidden h-6 w-6 group-data-[open]:block'
              />
            </DisclosureButton>
          </div>

          {/* Logo and Desktop Navigation Links */}
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center noteBuddy'>
              <Link to='/' aria-label='Navigate to homepage'>
                <h2>noteBuddy</h2>
              </Link>
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Menu Dropdown */}
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
            <Menu as='div' className='relative ml-3'>
              <MenuButton
                className='relative flex rounded-full bg-gray-800 text-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-2xl'
                aria-label='Open user menu'
              >
                <AiOutlineSetting />
              </MenuButton>
              <MenuItems className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition'>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Portfolio
                  </a>
                </MenuItem>
                <MenuItem>
                  <Link
                    to='/'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Homepage
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <DisclosurePanel className='sm:hidden'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          {navigation.map(item => (
            <Link
              key={item.name}
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
