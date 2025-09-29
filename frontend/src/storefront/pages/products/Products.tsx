import { Link, useParams, useSearchParams } from "react-router-dom";
import { useProductsTableData } from "./api/useProducts";
import { TableBase } from './table/TableBase';
import TableSearch from './table/TableSearch';
import TablePagination from './table/TablePagination';
import TablePageSizeSelector from './table/TablePageSizeSelector';
import TableCore from './table/TableCore';
import Card from '../../shared/components/Card';
import { useEffect, useState } from "react";
import type { Product } from "./types";
import Filterbar from "../../shared/components/Filterbar";


const ViewProducts = () => {
  const [pageTitle, setPageTitle] = useState<string>("All Products");
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const { categoryName } = useParams<{ categoryName: string }>();  
  
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
  } = useProductsTableData({
    filterQuery: category,
  });

  const [activeProducts, setActiveProducts] = useState<Product[]>(products);  

  
  useEffect(() => {
    // filter by category
    console.log(categoryName)
    if (categoryName !== undefined) {
      setActiveProducts(products.filter(p => p.category === categoryName));      
      console.log(categoryName)
      setPageTitle(categoryName)
    } else {
      if (search !== "") {
        setActiveProducts(products.filter(p => p.name.toLowerCase().includes(search.toLowerCase())));
          // p.category.some( category => category.toLowerCase().includes(search.toLowerCase()))));
      } else {
        setActiveProducts(products);
      }  
    }
  }, [categoryName, products]);

  return (
    <div>
      <Filterbar />    
      <div className="page-container w-full">        
        <h1 className="">{pageTitle}</h1>
        <TableBase
          data={activeProducts}
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
              <Card key={index}>
                <Link to={`/Products/${product._id}`} className="product-card">
                  <img 
                      src={product.src}
                      alt={product.alt}
                      className="w-full h-auto rounded shadow"
                    />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </Link>                                                  
              </Card>
            }
          />
          <div className="flex flex-col gap-4 my-4 w-full items-end">
            <TablePagination />
            <TablePageSizeSelector />
          </div>
        </TableBase>

      </div>    
    </div>
  );

};

export default ViewProducts;