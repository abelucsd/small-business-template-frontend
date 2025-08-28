import { useNavigate } from "react-router-dom";
import { useProductsTableData } from './api/useProducts';
import { TableBase } from './table/TableBase';
import TableSearch from './table/TableSearch';
import TablePagination from './table/TablePagination';
import TablePageSizeSelector from './table/TablePageSizeSelector';
import TableCore from './table/TableCore';
import Card from '../../shared/components/Card';


const ViewProducts = () => {
  const {
    products,
    total,
    isLoading,
    isError,
    pageIndex,
    pageSize,
    searchQuery,    
    setPageIndex,
    setPageSize,
    setSearchQuery,    
  } = useProductsTableData();

  const navigate = useNavigate();
  const handleProductClick = (id: string) => {
    // Navigate to ProductDetail page
    navigate(`/products/${id}`);
  };


  return (
    <div className="page-container w-full">
      <h1 className="">Products</h1>
      <TableBase
        data={products}
        total={total}
        pageIndex={pageIndex}
        pageSize={pageSize}        
        setPageIndex={setPageIndex}
        setPageSize={setPageSize}
        isLoading={isLoading}
        isError={isError}
      >
        <div className='flex flex-col items-end'>
          <TableSearch searchQuery={searchQuery} onChange={setSearchQuery}/>
        </div>
        <TableCore
          renderProduct={(product, index) => 
            <Card key={index} className='product-card'>              
              <div onClick={() => handleProductClick(product.id)}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>              
              </div>
            </Card>
          }
        />
        <div className="flex flex-col gap-4 my-4 w-full items-end">
          <TablePagination />
          <TablePageSizeSelector />
        </div>
      </TableBase>

    </div>    
  );

};

export default ViewProducts;