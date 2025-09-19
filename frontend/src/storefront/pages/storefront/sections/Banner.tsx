import { saleBannerImg } from "../../../utils/data";


const Banner = () => {
  return (
    <div className="container mx-auto bg-black h-120">
      <img className="h-120 w-screen object-cover"
          src={saleBannerImg} 
      />            
    </div>
  );
};

export default Banner;