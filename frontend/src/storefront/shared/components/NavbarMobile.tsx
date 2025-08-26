import React from 'react';
import { navList } from '../../utils/data';

const NavbarMobile = () => {
    return (
        <ul className='
            absolute flex flex-col gap-10 mt-100 px-8 py-10 bg-[var(--bg-nav-dropdown)] w-8/10
            left-1/2 transform -translate-x-1/2 rounded-xl text-white
            '>
            {navList.map((item, index) => 
                <h5 key={index}>{item.name}</h5>
            )}
        </ul>
    );
};

export default NavbarMobile;