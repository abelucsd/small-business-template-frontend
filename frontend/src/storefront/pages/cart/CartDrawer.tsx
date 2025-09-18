import { IoTrash } from "react-icons/io5";
import Card from "../../shared/components/Card";
import { useCartContext } from "./CartProvider"
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const navigate = useNavigate();

  const {
    items,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,    
  } = useCartContext();

  const itemsArray = Object.entries(items);

  // TODO: Create Checkout page
  const handleCheckoutClick = () => {
    navigate('/Checkout/');
  };


  return (
    <div className="container mx-auto flex flex-col justify-between">
      <h2>Shopping Cart</h2>

      {/* Checkout */}
      <div className="flex flex-row justify-between">
        <h3>Total Items: {totalUniqueItems}</h3>
        <button onClick={handleCheckoutClick}>
          Checkout
        </button>
      </div>

      {/* Cart List */}
      <div className="border border-black rounded-md pd-4 flex flex-col justify-between">
        {itemsArray.map(([id, {item, quantity}], index) => 
          <Card key={index}>
            <div className="flex flex-row">
              <img 
                src={item.src}
                alt={item.alt}
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <h3>{item.name}</h3>
                  <h3>{item.price}</h3>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-between">
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
        
      </div>      
    </div>
  )
}

export default CartDrawer
