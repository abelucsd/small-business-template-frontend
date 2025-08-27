import type { Product } from '../../products/types';
import apiClient from '../../../shared/api/apiClient';


export const getFeaturedProducts = async () 
  : Promise<{ data: Product[]; total: number }> => {    

  const response = await apiClient.get('/products/featured');  
    
  return {data: response.data, total: response.data.total};
};