import DropdownMenu from "./menu"

export default function Navbar() {
  return (
    <div className="flex flex-col bg-gray-400 h-20 mb-16 items-center md:h-28 md:flex-row md:justify-around">
        <div className="flex justify-around md:ml-36 w-full md:w-auto md:block">
        <DropdownMenu />
        <h3 className="text-2xl md:text-4xl md:hidden self-center"><strong>Friend Code</strong></h3>
        <div className="w-1/5 md:hidden"></div>
        </div>
        <h3 className="hidden md:text-4xl md:block"><strong>Friend Code</strong></h3>
        <input className="rounded-lg mt-2 search md:mt-0 p-1" type="text" placeholder="Search" />

    </div>
  )
}