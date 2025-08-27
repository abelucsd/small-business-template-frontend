import type { QueryFunctionContext } from '@tanstack/react-query';
import type { Category } from '../types';
import apiClient from '../../../shared/api/apiClient';
import type { CategoryFormValues } from '../create/types';

export const createCategory = async(body: CategoryFormValues) => {
  const response = await apiClient.post('/categories/', body);
  return response.data;
};

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

  return {data: response.data, total: response.data.length}
};


export const deleteCategory = async(id: string): Promise<string> => {
  const response = await apiClient.delete(`/categories/${id}`);

  return response.data?.message ?? 'Deleted successfully';
};

export const updateCategory = async ({id, updatedCategory,}: {id: string, updatedCategory: Partial<Category>}): Promise<string> => {
  const response = await apiClient.put(`/category/${id}`, updatedCategory);

  return response.data?.message ?? 'Updated successfully';
};