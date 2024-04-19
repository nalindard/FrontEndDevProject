import { Link } from 'react-router-dom';
import { useState } from "react"
import data from "/src/assets/data.json"

function TopNavigations() {

    const [navOpen, setNavOpen] = useState(false)

    const toogle = () => {
        setNavOpen(!navOpen)
    }

    return (
        <div className='bg-primary text-white w-full flex justify-between items-center px-5 pb-[26px] pt-[14.89px] font-inter relative'>
            {/* Logo */}
            <span>
                <Link to="/">
                    <img loading='lazy' src="./src/assets/White Logo.png" alt="logo" />
                </Link>
            </span>

            {/* Links */}
            <span className={`flex justify-between fixed z-20 px-5 pt-4 md:pt-0 md:absolute w-full md:w-auto h-dvh md:h-full top-0 bg-white text-black md:text-white md:bg-transparent transition-all duration-300 ' ${navOpen ? 'right-0' : '-right-full md:right-0'}`}>
                {/* Nav Links */}
                <span className='flex flex-col gap-8 md:gap-x-7 *:uppercase md:static md:flex-row md:items-center *:text-sm *:font-medium [line-height: 16.94px]'>
                    {data?.navLinks.map((li) => (
                        <Link key={li?.link} to={li?.link} className={`md:first:hidden`}>{li?.linkTitle}</Link>
                    ))}
                </span>

                {/* Nav Close Button */}
                <span className='z-20 md:hidden' onClick={toogle} >
                    <img src="./src/assets/hamburger-menu-close.png" alt="" />
                </span>
            </span>

            {/* Nav Open Button */}
            <span className='md:hidden absolute right-5 top-[26px] w-[31px]' onClick={toogle}>
                <img src="./src/assets/hamburger-menu.png" alt="" />
            </span>
        </div>
    )
}

export default TopNavigations