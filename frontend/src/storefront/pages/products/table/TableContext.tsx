import { createContext, useContext } from 'react';
import type { TableContextValue } from '../types';


export const TableContext = createContext<TableContextValue | null>(null);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) throw new Error('useTableContext must be used within a <Table.Provider>');
  return context;
};