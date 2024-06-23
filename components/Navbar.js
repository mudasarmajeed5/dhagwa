'use client'
import "./Navbar.css"
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [DropDown, setDropDown] = useState(false)
  const router = useRouter()
  return (
    <div className='text-center bg-[rgba(255,255,255,0.6)] sticky top-0 py-2 px-4 grid md:place-items-center place-items-start md:grid-cols-3 grid-cols-2 grid-rows-1 text-[--text-color] z-50'>


      <div onClick={() => router.push('/')} className="md:text-3xl text-2xl cursor-pointer underline-offset-4 navbar-name">
        <img src="https://i.ibb.co/RQ2Lj7c/dhalogo.png" width={150} alt="" />
      </div>


      <div className="md:flex gap-4 hidden">
        <div className="px-2 py-1 rounded-lg ">
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="getquote"
            type="button"
          >
            Projects
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdownHover"
            className="z-10 hidden text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-900"
              aria-labelledby="dropdownHoverButton"
            >
              <li className="relative">
                <a
                  href="#"
                  className="block hover:cursor-pointer px-4 py-2 hover:bg-gray-100"
                >
                  Latest Launches
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Ongoing Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Upcoming Projects
                </a>
              </li>

            </ul>
          </div>


        </div>

        <button className="getquote px-2 py-1 rounded-lg md:block hidden">
          About
        </button>
        <button className="getquote px-2 py-1 rounded-lg md:block hidden">
          Media
        </button>
      </div>

      <div className="contact md:flex hidden gap-2">
        <button className="px-2 py-1 border border-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 flex gap-1 justify-center items-center"><span><IoCallSharp /></span><span>Contact us</span></button>
        <button className="px-2 flex gap-1 justify-center items-center hover:bg-green-700 hover:text-white transition-all duration-300 py-1 border border-green-600"><span><FaWhatsapp /></span><span>Whatsapp</span></button>
      </div>


      <div className="place-self-center justify-self-end">
        <div className="md:hidden  justify-center text-2xl flex items-center">
          <span onClick={() => { setDropDown(!DropDown); }} className="z-10 relative">{DropDown ? <RxCross1 className="text-white" /> : <RiMenu3Line />}</span>
          <ul className={`${DropDown ? 'HamBurger_DropDown ' : 'hidden'} text-white`}>
            <li><Link onClick={() => setDropDown(!DropDown)} href={"#projects"}>Projects</Link></li>
            <li><Link onClick={() => setDropDown(!DropDown)} href={"#contact"}>Contact</Link></li>
            <li><Link onClick={() => setDropDown(!DropDown)} href={"#quote"}>Get Quote</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar