import { Link } from "react-router-dom";
import { navList } from "../../utils/data";

const Footer = () => {
  return (
    <footer className="
        h-120 relative container mx-auto flex flex-col
        md:h-100 full-bleed before:h-full before:bg-[var(--bg-nav)]
    ">
      <div className="flex-1 flex flex-col md:flex-row justify-between py-12 px-4 xl:px-0 text-white">
        <h2 className="flex-1">Company Name</h2>
        <div className="flex-1">
          <h4>Locations</h4>
          <h5>Street Ave., ST, 99999</h5>
        </div>
        <ul className="flex flex-col gap-4">
          {navList.map((item, index) => 
            <Link to={item.link}><h4 key={index}>{item.name}</h4></Link>
          )}
        </ul>
      </div>
      <div>
          <h5 className="text-white p-2 xl:p-0">© 2025, Template Powered by Angelo</h5>
      </div>
    </footer>
  );
};

export default Footer;