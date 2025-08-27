import { Link } from "react-router-dom";
import { logo } from "../../utils/data";
import { navItems } from "../../utils/data";
import { productsDropdownLinks, categoriesDropdownLinks } from "../../utils/data";
import DropdownLinks from "./DropdownLinks";
import { useDropdownContext } from "../providers/DropdownProvider";


interface SidenavProps {
  styles?: string;
  onLinkClick?: () => void;
}

const Sidenav = ({styles, onLinkClick}: SidenavProps) => {      
  const {          
    activeDropdownId,
    toggleDropdown,
    handleActiveLink,
  } = useDropdownContext();  
    
  return (
    <nav 
      className={`    
        ${styles}             
        flex flex-col gap-8 shadow-xs 
        border-r border-[#e5e7eb] w-64 h-full px-6 bg-[var(--bg-nav-admin)]
      `}
      >
      <h1>{logo}</h1>
      <ul className="flex flex-col gap-6">
        
        <li onClick={() => {          
          toggleDropdown(navItems[0].name)
          handleActiveLink(navItems[0].name, navItems[0].name)
          onLinkClick?.()
          }}>
          <Link             
            to={navItems[0].link}>
            <h3 className={`navlink ${activeDropdownId === navItems[0].name ? 'navlink active' : ''}`}>{navItems[0].name}</h3>
          </Link>
        </li>

        <li>
          <DropdownLinks 
            title={`Products`} 
            links={productsDropdownLinks} 
            onLinkClick={onLinkClick}            
          />
        </li>
        
        <li>
          <DropdownLinks 
            title={`Categories`} 
            links={categoriesDropdownLinks} 
            onLinkClick={onLinkClick}            
          />
        </li>

      </ul>
    </nav>
  );
};

export default Sidenav;