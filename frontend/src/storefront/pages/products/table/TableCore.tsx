import { useTableContext } from "./TableContext";
import type { Product } from "../types";
import { useEffect } from "react";

interface TableCoreProps {    
  renderProduct: (product: Product, index: number) => React.ReactNode;
}

const TableCore = ({ renderProduct}: TableCoreProps) => {
  const table = useTableContext();
  
  return (
    <div className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
      {table.products.map((product, index) => renderProduct(product, index))}      
    </div>
  )
}

export default TableCore