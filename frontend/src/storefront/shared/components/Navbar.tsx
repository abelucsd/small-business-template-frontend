import { TfiAlignJustify } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { navList } from '../../utils/data';
import NavbarMobile from './NavbarMobile';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../pages/cart/CartProvider";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const {
        totalUniqueItems
    } = useCartContext();
    
    useEffect(() => {
        const handleTouchMove = (e: TouchEvent) => {
            if (!isMenuOpen) return;
            e.preventDefault(); // block touch scroll on main page
        };

        document.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isMenuOpen]);
    

    return (        
        <nav className='
            top-0 z-50 sticky h-14 container mx-auto flex flex-row items-center justify-between h-14 text-white
            px-2 lg:px-3 xl:px-0 full-bleed before:bg-[var(--bg-nav)]
        '>
            <Link to={'/'}><h2>Template</h2></Link>
           
            <div className="hidden md:flex flex-row gap-10">
                <ul className='hidden md:flex flex-row gap-10'>
                    {navList.map((item, index) => 
                        <Link key={index} to={item.link}><h3>{item.name}</h3></Link>
                    )}
                </ul>
                <Link to={'/Cart'} className="p-1">
                    <FiShoppingCart size={22} />
                    {totalUniqueItems > 0 && (
                        <span className="absolute top-1 -right-1 flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-red-600 rounded-full">
                            {totalUniqueItems}
                        </span>
                    )}
                </Link>
            </div>

            {/* Mobile Navbar */}
            <button className='md:hidden z-10' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen == false ? <TfiAlignJustify /> : <h5>X</h5> }
            </button>
            <div className={`
                absolute z-150 top-full left-0
                ${isMenuOpen ? 'translate-x-0': 'max-[1280px]:-translate-x-full xl:hidden'}
                transition-transform duration-300 ease-in-out w-screen h-screen
            `}>
                <NavbarMobile
                    styles={"border-t border-[#e5e7eb] w-screen h-screen"}
                    onLinkClick={() => setIsMenuOpen(false)}
                />                
            </div>           
        </nav>
    );
};

export default Navbar;