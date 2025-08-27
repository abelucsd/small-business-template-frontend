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


  return (
    <div className="container mx-auto flex flex-col gap-8 h-screen py-8 md:p-8 px-2">
      <h2 className="">Products</h2>
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
        <TableSearch searchQuery={searchQuery} onChange={setSearchQuery}/>
        <TableCore
          renderProduct={(product) => 
            <Card className='product-card'>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Card>
          }
        />
        <div className="float-right flex flex-col gap-4 my-4">
          <TablePagination />
          <TablePageSizeSelector />
        </div>
      </TableBase>

    </div>    
  );

};

export default ViewProducts;