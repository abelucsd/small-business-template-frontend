import '@tanstack/react-query';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  getProducts,  
} from './productsAPI';
import type { Product } from '../types';


const defaultProductsData: Product[] = [];

export const useProductsTableData = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [filterQuery, setFilterQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  


  const queryClient = useQueryClient();

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
    isDialogOpen,
    selectedProductId,
    setPageIndex,
    setPageSize,
    setFilterQuery,
    setSearchQuery,  
    isUpdateOpen,
    selectedProduct,    
  };
};