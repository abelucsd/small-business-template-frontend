import '@tanstack/react-query';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  getProducts,
  deleteProduct,
  updateProduct,
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

  const updateMutation = useMutation<string, Error, { id: string; updatedProduct: Partial<Product> }>({
      mutationFn: updateProduct,
      onSuccess: () => {
        queryClient.invalidateQueries({
            predicate: query => query.queryKey[0] === 'products',
        });
      },
      onError: (error) => {
        alert(error.message);
      }
    });

  const handleUpdate = (id: string, updatedProduct: Partial<Product>) => {
    updateMutation.mutate({id, updatedProduct});
  };

  const handleOpenEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsUpdateOpen(true);
  };
  
  const handleCloseEdit = () => {
    setIsUpdateOpen(false);
    setSelectedProduct(null);
  };

  const deleteMutation = useMutation<string, Error, string>({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
          predicate: query => query.queryKey[0] === 'products',
      });
      alert('product deleted successfully');
    },
    onError: (error) => {
      alert(error.message);
    },        
  });

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };

  const handleOpenConfirm = (id: string) => {
    setSelectedProductId(id);
    setDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedProductId) {
      handleDelete(selectedProductId); // your mutation call
    }
    setDialogOpen(false);
    setSelectedProductId(null);
  };

  const handleCancelDelete = () => {
    setDialogOpen(false);
    setSelectedProductId(null);
  };



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
    handleOpenEdit,
    handleCloseEdit,
    handleUpdate,
    isUpdateOpen,
    selectedProduct,
    handleDelete,
    handleOpenConfirm,
    handleConfirmDelete,
    handleCancelDelete,    
  };
};