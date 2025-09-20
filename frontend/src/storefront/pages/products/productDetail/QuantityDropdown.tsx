import { useEffect, useRef, useState } from "react";

interface QuantityDropdownProps {
  quantity: number;
  handleQuantityChange: (newQuantity: number) => void;
}

const QuantityDropdown = ({quantity, handleQuantityChange}: QuantityDropdownProps) => {  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const maxQuantity = 30;

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-2 py-2 text-left border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
      >
        Quantity: {quantity}
      </button>

      {isOpen && (
        <ul
          className="absolute top-full left-0 right-0 max-h-36 overflow-y-auto bg-color-white border-gray-300 bg-white mt-1 rounded shadow-lg z-50"
        >
          {[...Array(maxQuantity)].map((_, index) => (
            <li
              key={index + 1}
              onClick={() => {
                handleQuantityChange(index + 1);
                setIsOpen(false);
              }}
              className="px-2 py-2 cursor-pointer hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
            >
              {index + 1}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default QuantityDropdown;