import { useRef, useState } from "react";
import Modal from "react-modal";
import { useCartContext } from "../../cart/CartProvider";
import type { Product } from "../types";
import QuantityDropdown from "./QuantityDropdown";

const modalStyles = {
  content: {            
    height: '160px',
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',        
    marginRight: '-50%',    
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

interface ProductOrderProps {
  product: Product;
  styles?: string;
}

const ProductOrder = ({product, styles}: ProductOrderProps) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const {addItem} = useCartContext();
  const [quantity, setQuantity] = useState<number>(1);

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="flex flex-col gap-6">

      <h3>In Stock</h3>

      <div><h3>${product.price}</h3></div>

      <div className="w-full">
        <QuantityDropdown quantity={quantity} handleQuantityChange={handleQuantityChange} />       
      </div>

      <button
        onClick={openModal}
        className={`${styles} bg-blue-600 text-white w-full px-4 py-2 rounded hover:bg-blue-700`}
      >
        Add to Cart
      </button>


      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}        
      >       
        <div className="flex flex-col justify-between h-full py-2 px-2">
          <h3>Adding {quantity} item(s) into the cart?</h3>
          <div className="flex flex-row gap-4 justify-end">
            <button onClick={() => {
              addItem(product, quantity);
              closeModal();
            }}
            className="border hover:bg-gray-100 px-4 py-1"
            >
              Yes
            </button>
            <button onClick={closeModal} className="border hover:bg-gray-100 px-4 py-1">
              No
            </button>
          </div>
        </div>
      </Modal>


    </div>
  )
}

export default ProductOrder