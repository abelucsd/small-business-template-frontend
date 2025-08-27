import type { QueryFunctionContext } from '@tanstack/react-query';
import type { Product } from '../types';
import apiClient from '../../../shared/api/apiClient';


export const getProducts = async ({ queryKey }: QueryFunctionContext<[string, number, number, string, string]> ) 
  : Promise<{ data: Product[]; total: number }> => {
    
  const [, pageIndex, pageSize, filterQuery, searchQuery] = queryKey;

  const response = await apiClient.get('/products/', {
    params: {
      page: pageIndex + 1,
      limit: pageSize,
      filter: filterQuery,
      search: searchQuery,
    },
  });
  
  return response.data;
};