import { useState } from 'react';
import { navList } from '../../utils/data';
import { TfiAlignJustify } from "react-icons/tfi";
import NavbarMobile from './NavbarMobile';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (        
        <nav className='
            top-0 z-50 sticky h-14 container mx-auto flex flex-row items-center justify-between h-14 text-white
            px-2 lg:px-3 xl:px-0 full-bleed before:bg-[var(--bg-nav)]
        '>
            <h3>Template</h3>
           
            <ul className='hidden md:flex flex-row gap-10'>
                {navList.map((item, index) => 
                    <h5 key={index}>{item.name}</h5>
                )}
            </ul>

            {/* Mobile Navbar */}
            <button className='md:hidden z-10' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen == false ? <TfiAlignJustify /> : <h5>X</h5> }
            </button>
            {isMenuOpen &&
                <NavbarMobile />
            }
        </nav>
    );
};

export default Navbar;