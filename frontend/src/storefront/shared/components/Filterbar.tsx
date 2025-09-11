import { useNavigate } from "react-router-dom";
import { useCategories } from "../api/useCategories";


const Filterbar = () => {
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
    <div className="container mx-auto flex flex-row justify-between items-center h-10 relative full-bleed before:border-t before:border-white">
      {categories.map((category, index) => (
        <p className="text-white" key={index} onClick={() => handleProductClick(category.name)}>{category.name}</p>
      ))}
    </div>
  );
};

export default Filterbar;