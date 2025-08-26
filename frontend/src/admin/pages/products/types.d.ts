export type Product = {
  _id: string;
  id: string;
  name: string;
  price: number;
  salePrice: number;
  cost: number;
  category: string;
  description: string;
  src: string;
  alt: string;
}

export type TableContextValue = {
  products: Product[];
  total: number;
  getProductsPerRow: () => number;
  pageIndex: number;
  pageSize: number;
  setPageIndex: (page: number) => void;
  setPageSize: (size: number) => void;
  getPageCount: () => number;
  isLoading: boolean;
  isError: boolean;
  nextPage: () => void;
  previousPage: () => void;
  getCanNextPage: boolean;
  getCanPreviousPage: boolean;
};