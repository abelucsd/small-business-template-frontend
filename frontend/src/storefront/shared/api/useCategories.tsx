import '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import {
  getCategories,  
} from './categories.api';
import type { Category } from '../types/categories';


const defaultCategoriesData: Category[] = [];

export const useCategories = () => {  

  const { data, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 60 * 24 * 30,
    refetchInterval: false,
    placeholderData: (previousData) => previousData,
  });


  return {
    categories: data?.data ?? defaultCategoriesData,
    total: data?.total ?? 0,
    isLoading,
    isError,      
  };
};