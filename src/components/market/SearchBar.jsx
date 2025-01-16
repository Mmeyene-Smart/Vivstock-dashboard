import { IoClose } from 'react-icons/io5';

function SearchBar({ searchTerm, setSearchTerm }) {
  const clearSearch = () => setSearchTerm('');

  return (
    <div className="relative mb-8">
      <div className="flex items-center bg-app-gray rounded-lg px-4 py-3">
        <input
          type="text"
          placeholder="Search NG stocks"
          className="flex-1 bg-transparent outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <IoClose 
            size={24} 
            className="text-gray-400 cursor-pointer" 
            onClick={clearSearch}
          />
        )}
      </div>
    </div>
  );
}

export default SearchBar;