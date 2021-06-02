import { Menu } from '@headlessui/react'

export default function DropdownMenu() {
  return (
    <Menu className="relative">
        {({open}) => (
            <>
      <Menu.Button className="focus:outline-none">Menu</Menu.Button>
      <div className={`${open && "fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"}`}></div>
      <Menu.Items className="absolute menu-small bg-gray-50 shadow-lg flex flex-col justify-evenly h-28 w-36">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500 '} pl-2`}
              href="/"
            >
              Add a new game
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'} pl-2`}
              href="/account-settings"
            >
              Contact Us
            </a>
          )}
        </Menu.Item>
        <div className="flex items-center justify-around">
        <Menu.Item>
        {({ active }) => (
          <a href="/"><img className={(active && 'bg-blue-500') + " w-8"} src="\united-kingdom.png" alt="uk flag"/></a>
        )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
          <a href="/"><img className={(active && 'bg-blue-500') + " w-8"} src="\france.png" alt="france flag"/></a>
        )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
          <a href="/"><img className={(active && 'bg-blue-500') + " w-8"} src="\spain.png" alt="spain flag"/></a>
        )}
        </Menu.Item>
        </div>
      </Menu.Items>
      </>
        )}
    </Menu>
  )
}