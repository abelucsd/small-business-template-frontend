import { useEffect } from "react";
import { IoTrash } from "react-icons/io5";
import Card from "../../shared/components/Card";
import { useCartContext } from "./CartProvider"
import { useNavigate } from "react-router-dom";


const CartDrawer = () => {
  const navigate = useNavigate();

  const {
    items,
    totalItems,    
    updateItemQuantity,
    removeItem,    
  } = useCartContext();

  const itemsArray = Object.entries(items);

  // TODO: Create Checkout page
  const handleCheckoutClick = () => {
    navigate('/Checkout/');
  };


  return (
    <div className="container mx-auto flex flex-col justify-between gap-8 mt-12">
      <h2>Shopping Cart</h2>

      {/* Checkout */}
      <div className="flex flex-row justify-between">
        <h3 className="w-1/3">Total Items: {totalItems}</h3>
        <div className="w-1/3">          
          <button onClick={handleCheckoutClick} className="border rounded-xl bg-yellow-300 px-2 float-right">
            Checkout
          </button>
        </div>
      </div>

      {/* Cart List */}
      <div className="border-b border-t border-black py-16 flex flex-col justify-between gap-16">
        {itemsArray.map(([id, {item, quantity}], index) => 
          <Card key={index}>
            <div className="flex flex-row justify-between border-b border-gray-300 pb-4 mx-4">
              <div className="flex flex-row product-card w-1/3">
                <img 
                  src={item.src}
                  alt={item.alt}
                />
              </div>
              <div className="flex flex-col justify-between w-1/3">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-4">
                    <h3>{item.name}</h3>
                    <h4>{item.description}</h4>
                  </div>
                  <h3>{item.price}</h3>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between gap-4">
                    <p><button onClick={() => updateItemQuantity(id, quantity - 1)}>-</button></p>
                    <p>{quantity}</p>
                    <p><button onClick={() => updateItemQuantity(id, quantity + 1)}>+</button></p>
                  </div>
                  <p><button onClick={() => removeItem(id)}><IoTrash size={20} /></button></p>
                </div>
              </div>              
            </div>
          </Card>
        )}
        
        <div className="flex justify-between mx-4">
          <div className="w-1/3"></div>
          <div className="flex flex-row justify-end w-1/3">
            <h3>Subtotal ({totalItems}): $300</h3>
          </div>
        </div>        
        
      </div>      
    </div>
  )
}

export default CartDrawer
