import type { QueryFunctionContext } from '@tanstack/react-query';
import type { Category } from '../types';
import apiClient from '../../../shared/api/apiClient';

export const getCategories = async ({ queryKey }: QueryFunctionContext<[string, number, number, string]> ) 
  : Promise<{ data: Category[]; total: number }> => {
    
  const [, pageIndex, pageSize, searchQuery] = queryKey;

  const response = await apiClient.get('/categories/', {
    params: {
      page: pageIndex + 1,
      limit: pageSize,
      search: searchQuery,
    },
  });
  
  return response.data;
};


export const deleteCategory = async(id: string): Promise<string> => {
  const response = await apiClient.delete(`/categories/${id}`);

  return response.data?.message ?? 'Deleted successfully';
};

export const updateCategory = async ({id, updatedCategory,}: {id: string, updatedCategory: Partial<Category>}): Promise<string> => {
  const response = await apiClient.put(`/category/${id}`, updatedCategory);

  return response.data?.message ?? 'Updated successfully';
};