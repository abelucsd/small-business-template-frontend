import '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  getProducts,  
} from './productsAPI';
import type { Product } from '../types';


const defaultProductsData: Product[] = [];

interface useProductsTableDataProps {
  filterQuery: string;
}

export const useProductsTableData = ({filterQuery}: useProductsTableDataProps) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  // const [filterQuery, setFilterQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', pageIndex, pageSize, filterQuery, searchQuery],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 60 * 24 * 30,
    refetchInterval: false,
    placeholderData: (previousData) => previousData,
  });


  return {
    products: data?.data ?? defaultProductsData,
    total: data?.total ?? 0,
    isLoading,
    isError,
    pageIndex,
    pageSize,
    filterQuery,
    searchQuery,        
    setPageIndex,
    setPageSize,    
    setSearchQuery,        
  };
};