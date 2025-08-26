export type Product = {
  name: string;
  price: number;
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