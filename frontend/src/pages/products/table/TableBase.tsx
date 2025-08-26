import type { Product } from "../types";
import { TableContext } from "./TableContext";

interface TableBaseProps {
  children: React.ReactNode;
  data: Product[];
  total: number;
  pageIndex: number;
  pageSize: number;
  setPageIndex: (index: number) => void;
  setPageSize: (size: number) => void;
  isLoading: boolean;
  isError: boolean;
  styles?: string;
}

export const TableBase = ({
  children,
  data,
  total,
  pageIndex,
  pageSize,
  setPageIndex,
  setPageSize,
  isLoading,
  isError,
  styles
}: TableBaseProps) => {

  // helpers
  const getCanPreviousPage = pageIndex > 0;
  const getCanNextPage = pageIndex < Math.ceil(total / pageSize) - 1;  

  const getProductsPerRow = () => {
    const width = window.innerWidth;

    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    if (width >= 640) return 2;
    return 1;
  }
  

  const tableContextValue = {
    products: data,
    total,
    getProductsPerRow,
    
    // pagination
    pageIndex,
    pageSize,
    setPageIndex,
    setPageSize,
    getPageCount: () => Math.ceil(total / pageSize),
    nextPage: () => setPageIndex(Math.min(pageIndex + 1, Math.ceil(total / pageSize) - 1)),
    previousPage: () => setPageIndex(Math.max(pageIndex - 1, 0)),
    getCanNextPage,
    getCanPreviousPage,

    // states
    isLoading,
    isError,
  };

  return (
    <TableContext.Provider value={tableContextValue}>
      <div className={`${styles} flex flex-col gap-8 w-full`}>
        {isLoading && <div className="text-center">Loading...</div>}
        {isError && <div className="text-center text-red-600">Failed to load data.</div>}
        {!isLoading && !isError && children}
      </div>
    </TableContext.Provider>
  );
};
