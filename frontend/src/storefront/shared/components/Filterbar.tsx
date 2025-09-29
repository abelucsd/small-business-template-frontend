import { Link } from "react-router-dom";
import { useCategories } from "../api/useCategories";
import { useEffect, useState } from "react";

const Filterbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const {
    categories,
    isLoading,
    isError,
  } = useCategories();  

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])



  if (isError || isLoading) {
    return (
      <div className="container mx-auto flex flex-row justify-between">
        <p>Loading...</p>
      </div>
    );
  };

 
  if (isSmallScreen) {
    return (
      <></>
    )
  };


  return (
    <div className="container mx-auto flex flex-row justify-between items-center h-10 relative full-bleed before:border-t before:border-white z-100">
      {categories.map((category, index) => (
        <Link to={`/Products?category=${category._id}`} className="text-white" key={index}>
          {category.name}
        </Link>        
      ))}
    </div>
  );
};

export default Filterbar;