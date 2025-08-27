import { useTableContext } from "./TableContext";


const TablePageSizeSelector = () => {  
  const table = useTableContext();

  return (
    <select
      value={table.pageSize}
      onChange={e => table.setPageSize(Number(e.target.value))}
      className="border rounded px-2 py-1 w-full md:w-1/3"
    >
      {[5, 10, 20].map(size => (
        <option key={size} value={size}>
          Show {size}
        </option>
      ))}
    </select>
  );
};

export default TablePageSizeSelector;