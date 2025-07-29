
const SearchItem = ({search,setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlForm='search'></label>
        <input
          id='search'
          type='text'
          role="searchbox"
          placeholder="search item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem
