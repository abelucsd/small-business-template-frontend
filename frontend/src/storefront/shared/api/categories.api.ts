import apiClient from "./apiClient";
import type { Category } from "../types/categories";

export const getCategories = async () 
  : Promise<{ data: Category[]; total: number }> => {    

  const response = await apiClient.get('/categories');  
    
  return {data: response.data, total: response.data.total};
};