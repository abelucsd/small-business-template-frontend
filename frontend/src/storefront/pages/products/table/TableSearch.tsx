
interface TableSearchProps {
  searchQuery: string;
  onChange: (v: string) => void;
  styles?: string;
};

const TableSearch = ({searchQuery, onChange, styles }: TableSearchProps) => {
  return (    
    <input 
      className={`${styles} border rounded px-3 py-2 w-full md:w-1/3`}
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={e => {
        onChange(e.target.value);
      }}
    />
  );
};

export default TableSearch;