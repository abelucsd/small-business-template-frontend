import { useNavigate } from "react-router-dom";
import { saleBannerImg } from "../../../utils/data";


const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Products");
  };

  
  return (
    <div className="container mx-auto bg-black h-120">
      <button onClick={handleClick}>
        <img className="h-120 w-screen object-cover"
            src={saleBannerImg} 
        />
      </button>      
    </div>
  );
};

export default Banner;