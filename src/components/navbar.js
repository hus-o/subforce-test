import DropdownMenu from "./menu"

export default function Navbar() {
  return (
    <div className="flex flex-col bg-gray-400 h-16 items-center md:h-28 md:flex-row md:justify-around">
        <div className="flex justify-around w-full md:w-auto md:block">
        <DropdownMenu />
        <h3 className="text-xl md:text-4xl md:hidden"><strong>Friend Code</strong></h3>
        <div className="w-1/5 md:hidden"></div>
        </div>
        <h3 className="hidden md:text-4xl md:block"><strong>Friend Code</strong></h3>
        <input className="rounded-lg" type="text" placeholder="Search" />

    </div>
  )
}