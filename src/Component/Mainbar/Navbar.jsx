
import { FiMenu, FiSearch, FiBell, FiUser } from 'react-icons/fi'

const Navbar = () => {
  return (
    <header className="h-16 shrink-0 bg-white border-b border-gray-200 flex items-center justify-between px-6 gap-4">
      <FiMenu size={23} className="text-gray-600 shrink-0" />
      <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-2 w-full max-w-md">
        <FiSearch size={19} className="text-gray-500" />
        <input className="bg-transparent outline-none w-full text-sm" placeholder="Search anything..." />
      </div>
      <button className="text-gray-600"><FiBell size={22} /></button>
      <div className="flex items-center gap-2 text-gray-700 shrink-0">
        <FiUser size={22} />
        <span className="hidden sm:block">Ketan</span>
      </div>
    </header>
  )
}

export default Navbar
