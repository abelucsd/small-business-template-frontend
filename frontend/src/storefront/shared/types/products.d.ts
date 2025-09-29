export type Product = {
  _id: string;
  id: string;
  name: string;
  price: number;
  categoryId: { _id: string; name: string };
  category: string;
  src: string;
  alt: string;
  description: string;
}

export type ProductsTableContextValue = {
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