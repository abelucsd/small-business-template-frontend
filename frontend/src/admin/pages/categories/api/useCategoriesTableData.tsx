import '@tanstack/react-query';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getCategories,
  deleteCategory,
  updateCategory
} from './categoriesTableAPI'
import type { Category } from '../types';
import { useState } from 'react';

const defaultCategoriesData: Category[] = [];

export const useCategoriesTableData = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  


  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['categories', pageIndex, pageSize, searchQuery],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 60 * 24 * 30,
    refetchInterval: false,
    placeholderData: (previousData) => previousData,
  });

  const updateMutation = useMutation<string, Error, { id: string; updatedCategory: Partial<Category> }>({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
          predicate: query => query.queryKey[0] === 'Categories',
      });
    },
    onError: (error) => {
      alert(error.message);
    }
  });

  const handleUpdate = (id: string, updatedCategory: Partial<Category>) => {
    updateMutation.mutate({id, updatedCategory});
  };

  const handleOpenEdit = (Category: Category) => {
    setSelectedCategory(Category);
    setIsUpdateOpen(true);
  };
  
  const handleCloseEdit = () => {
    setIsUpdateOpen(false);
    setSelectedCategory(null);
  };

  const deleteMutation = useMutation<string, Error, string>({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
          predicate: query => query.queryKey[0] === 'Categories',
      });
      alert('Category deleted successfully');
    },
    onError: (error) => {
      alert(error.message);
    },        
  });

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };

  const handleOpenConfirm = (id: string) => {
    setSelectedCategoryId(id);
    setDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedCategoryId) {
      handleDelete(selectedCategoryId); // your mutation call
    }
    setDialogOpen(false);
    setSelectedCategoryId(null);
  };

  const handleCancelDelete = () => {
    setDialogOpen(false);
    setSelectedCategoryId(null);
  };



  return {
    categories: data?.data ?? defaultCategoriesData,
    total: data?.total ?? 0,
    isLoading,
    isError,
    pageIndex,
    pageSize,
    searchQuery,
    isUpdateOpen,
    selectedCategory,
    isDialogOpen,
    selectedCategoryId,
    setPageIndex,
    setPageSize,
    setSearchQuery,
    handleOpenEdit,
    handleCloseEdit,
    handleUpdate,
    handleDelete,
    handleOpenConfirm,
    handleConfirmDelete,
    handleCancelDelete,    
  };
};