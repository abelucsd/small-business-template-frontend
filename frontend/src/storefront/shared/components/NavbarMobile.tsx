import { navList } from '../../utils/data';
import { useCategories } from '../api/useCategories';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarMobileProps {
    styles?: string;
    onLinkClick: () => void;
}

const NavbarMobile = ({styles, onLinkClick}: NavbarMobileProps) => {
    const {
        categories,
        isLoading,
        isError,
    } = useCategories();

    const navigate = useNavigate();
    const handleProductClick = (name: string) => {
        // Navigate to ProductDetail page
        navigate(`/Products/category/${name}`);
    };

    if (isError || isLoading) {
        return (
        <div className="container mx-auto flex flex-row justify-between">
            <p>Loading...</p>
        </div>
        );
    };


    return (
        <ul className={`
            ${styles}            
            p-4 bg-white text-black
            flex flex-col gap-12
            `}>
            <h3>Categories</h3>
            {categories.map((item, index) => 
                <h5 key={index} onClick={() => {
                    handleProductClick(item.name);
                    onLinkClick();
                }}>{item.name}</h5>
            )}
            <hr className='w-1/3'/>
            {navList.map((item, index) => 
                <Link key={index} to={item.link} onClick={onLinkClick}>
                    <h5>{item.name}</h5>
                </Link>
            )}

        </ul>
    );
};

export default NavbarMobile;