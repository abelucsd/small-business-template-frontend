import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '../products/types';


type CartContextType = {
  items: {[id: string]: {item: Product, quantity: number}};
  totalUniqueItems: number;  
  totalItems: number;
  addItem: (item: Product, quantity: number) => void;  
  isEmpty: () => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
};


const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({children}: {children: React.ReactNode}) => {  
  const [items, setItems] = useState<{[id: string]: {item: Product, quantity: number}}>(() => {
    const stored = localStorage.getItem("cartList");
    return stored ? JSON.parse(stored): {};
  });

  const totalItems = useMemo(() => {
    const itemsArray = Object.entries(items) as [string, {item: Product; quantity: number}][];
    let numItems = 0;
    console.log(itemsArray)
    itemsArray.forEach(([id, { item, quantity }]) => {
      console.log(`quantity: ${quantity}`)
      numItems = numItems + quantity;
    });
    return numItems;
  }, [items]);
  
  const totalUniqueItems = useMemo(() => Object.keys(items).length, [items]);

  useEffect(() => {
    console.log(items)
    localStorage.setItem("cartList", JSON.stringify(items));
  }, [items])

  const addItem = (item: Product, quantity: number) => {
    try {
      console.log("Adding item")
      setItems(prev => ({
        ...prev,
        [item.id]: { item: item, quantity: quantity },
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = (id: string) => {
    try {
      const newItems = { ...items };
      if (newItems[id] === undefined) {
        throw new Error(`Item with id ${id} does not exist in the cart.`)
      }
      delete newItems[id]
      setItems(newItems);
    } catch (err) {
      console.error(err);
    }
  };

  const clearItems = () => {
    try {
      setItems({});      
    } catch (err) {
      console.error(err);
    }
  };
  
  const isEmpty = () => useMemo(() => Object.keys(items).length === 0, [totalUniqueItems]);  

  const updateItemQuantity = (id: string, quantity: number) => {
    try {
      setItems( prev => {
        if (!prev[id]) {
          throw new Error(`Cannot update quantity: item with id ${id} not found in the cart.`)        
        }
        return {
          ...prev, 
          [id]: { ...prev[id], quantity }
        };
      });
      if (quantity === 0) {
        removeItem(id);
      }
    } catch (err) {
      console.error(err);
    }
  };  


  return (
    <CartContext.Provider value={{items, addItem, removeItem, isEmpty, totalItems, totalUniqueItems, updateItemQuantity, clearItems}}>
      {children}
    </CartContext.Provider>
  );
};


export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartContext must be used within a CartProvider')
  return ctx;
};