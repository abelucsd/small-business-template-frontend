export type Category = {
  _id: string;
  id: string;
  name: category;
}

export type TableContextValue = {
  categories: Category[];
  total: number;
  getCategoriesPerRow: () => number;
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