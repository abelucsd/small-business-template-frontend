import {  
  createColumnHelper,
} from '@tanstack/react-table';

import { useCategoriesTableData } from '../api/useCategoriesTableData';
import { ConfirmDialog } from '../../../shared/components/ConfirmDialog';
import { UpdateCategoryModal } from '../modals/UpdateCategoryModal';
import TableBase from '../../../shared/components/table/TableBase';
import TableSearch from '../../../shared/components/table/TableSearch';
import TableCore from '../../../shared/components/table/TableCore';
import TablePagination from '../../../shared/components/table/TablePagination';
import TablePageSizeSelector from '../../../shared/components/table/TablePageSizeSelector';


const ViewCategories = () => {
  const {
    categories,
    total,
    isLoading,
    isError,
    pageIndex,
    pageSize,
    searchQuery,
    isUpdateOpen,
    selectedCategory,
    isDialogOpen,
    setPageIndex,
    setPageSize,
    setSearchQuery,
    handleUpdate,    
    handleOpenEdit,
    handleCloseEdit,
    handleOpenConfirm,
    handleConfirmDelete,
    handleCancelDelete,
  } = useCategoriesTableData();

  const columnHelper = createColumnHelper<typeof categories[0]>();

  const columns = [
    columnHelper.accessor('id', {
      header: () => 'Id',
      cell: info => info.getValue(),
      meta: {
        className: 'w-48 truncate',
      },
    }),
    columnHelper.accessor('name', {
      header: () => 'Category Name',
      cell: info => info.getValue(),
      meta: {
        className: 'w-48 truncate',
      },
    }),    
    columnHelper.display({
      id: 'actions',
      header: () => 'Actions',
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button 
            onClick={() => handleOpenEdit(row.original)}
            className="text-blue-600 hover:text-blue-800"
          >
            Update
          </button>

          <button
            onClick={() => handleOpenConfirm(row.original._id)}
            className="text-red-600 hover:text-red-800"
          >
          Delete 
          </button>
        </div>
      ),
    })
  ];  

  return (
    <div className="container mx-auto flex flex-col gap-8 h-screen py-8 md:p-8 px-2">
      <h2 className="">Categories</h2>
      <TableBase
        data={categories}
        total={total}
        pageIndex={pageIndex}
        pageSize={pageSize}        
        setPageIndex={setPageIndex}
        setPageSize={setPageSize}        
        columns={columns}
        isLoading={isLoading}
        isError={isError}
      >
        <TableSearch searchQuery={searchQuery} onChange={setSearchQuery}/>
        <TableCore />
        <div className="float-right flex flex-col gap-4 my-4">
          <TablePagination />
          <TablePageSizeSelector />
        </div>
      </TableBase>

      <UpdateCategoryModal
        isOpen={isUpdateOpen}
        onClose={handleCloseEdit}
        category={selectedCategory}
        onUpdate={handleUpdate}
      />

      <ConfirmDialog
        isOpen={isDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>    
  );

};

export default ViewCategories;