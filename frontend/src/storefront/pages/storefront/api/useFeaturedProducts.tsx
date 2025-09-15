import '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import {
  getFeaturedProducts,  
} from './featuredProducts.api';
import type { Product } from '../../products/types';


const defaultProductsData: Product[] = [];

export const useFeaturedProducts = () => {  

  const { data, isLoading, isError } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: getFeaturedProducts,
    staleTime: 1000 * 60 * 60 * 24 * 30,
    refetchInterval: false,
    placeholderData: (previousData) => previousData,
  });


  return {
    products: data?.data ?? defaultProductsData,
    total: data?.total ?? 0,
    isLoading,
    isError,      
  };
};