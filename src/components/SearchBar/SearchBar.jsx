const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <header>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="id"
          // value={searchQuery}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
