import { useTableContext } from "./TableContext";
import type { Product } from "../types";

interface TableCoreProps {    
  renderProduct: (product: Product, index: number) => React.ReactNode;
}

const TableCore = ({ renderProduct}: TableCoreProps) => {
  const table = useTableContext();
  
  return (
    <div className={`grid grid-cols-${table.getProductsPerRow}`}>
      {table.products.map((product, index) => renderProduct(product, index))}      
    </div>
  )
}

export default TableCore