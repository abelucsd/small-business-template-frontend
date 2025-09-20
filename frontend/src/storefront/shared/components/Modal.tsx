import { useState } from "react";
import Modal from "react-modal";

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

interface CustomModalProps {

  header: string;
  onResult: (result: boolean) => void;
};

const CustomModal = ({ header, onResult}: CustomModalProps) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(true);

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    
  }

  const closeModal = (result: boolean) => {
    onResult(result);
    setIsOpen(false);    
  }


  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}      
      style={modalStyles}        
    >       
      <div className="flex flex-col justify-between h-full py-2 px-2">
        <h3>{header}</h3>
        <div className="flex flex-row gap-4 justify-end">
          <button onClick={() => {            
            closeModal(true);
          }}
          className="border hover:bg-gray-100 px-4 py-1"
          >
            Yes
          </button>
          <button onClick={() => closeModal(false)} className="border hover:bg-gray-100 px-4 py-1">
            No
          </button>
        </div>
      </div>
    </Modal>

  )
}

export default CustomModal;