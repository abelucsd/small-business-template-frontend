<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate, useParams } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> styles: modify the spacing in the product pages.
=======
import { useNavigate, useParams } from "react-router-dom";
>>>>>>> feat: add filter bar.
import { useProductsTableData } from './api/useProducts';
import { TableBase } from './table/TableBase';
import TableSearch from './table/TableSearch';
import TablePagination from './table/TablePagination';
import TablePageSizeSelector from './table/TablePageSizeSelector';
import TableCore from './table/TableCore';
import Card from '../../shared/components/Card';
import { useEffect, useState } from "react";
import type { Product } from "./types";
<<<<<<< HEAD
import Filterbar from "../../shared/components/Filterbar";
=======
>>>>>>> feat: add filter bar.


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

<<<<<<< HEAD
<<<<<<< HEAD
  const [activeProducts, setActiveProducts] = useState<Product[]>(products);

  const navigate = useNavigate();
  const handleProductClick = (id: string) => {
    // Navigate to ProductDetail page
    navigate(`/Products/${id}`);
  };

  const { categoryName } = useParams<{ categoryName: string }>();
  
  useEffect(() => {
    // filter by category
    console.log(categoryName)
    if (categoryName !== undefined) {
      setActiveProducts(products.filter(p => p.category === categoryName));      
      console.log(categoryName)
    } else {
      setActiveProducts(products);
    }
  }, [categoryName, products]);

  return (
    <div>
      <Filterbar />    
      <div className="page-container w-full">        
        <h1 className="">Products</h1>
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
                <div className="product-card" onClick={() => handleProductClick(product.id)}>
                  <img 
                    src={product.src}
                    alt={product.alt}
                    className="w-full h-auto rounded shadow"
                  />
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
    </div>
=======
=======
  const [activeProducts, setActiveProducts] = useState<Product[]>(products);

>>>>>>> feat: add filter bar.
  const navigate = useNavigate();
  const handleProductClick = (id: string) => {
    // Navigate to ProductDetail page
    navigate(`/Products/${id}`);
  };

  const { categoryName } = useParams<{ categoryName: string }>();
  
  useEffect(() => {
    // filter by category
    console.log(categoryName)
    if (categoryName !== undefined) {
      setActiveProducts(products.filter(p => p.category === categoryName));      
      console.log(categoryName)
    } else {
      setActiveProducts(products);
    }
  }, [categoryName, products]);

  return (
    <div className="page-container w-full">
      <h1 className="">Products</h1>
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
>>>>>>> styles: modify the spacing in the product pages.
  );

};

export default ViewProducts;