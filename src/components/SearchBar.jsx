const SearchBar = ({ value, onChange }) => (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by title or author"
      className="border p-2 w-full mb-4"
    />
  );
  
  export default SearchBar;
  