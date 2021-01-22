import React from "react";

class SearchSection extends React.Component {
  render() {
    const { handleSearch, searchTerm } = this.props;

    return (
      <form className="search-form">
        <label htmlFor="searchTerm">Search:</label>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="Search Title"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button>Search!</button>
        <div className="filters">
          <label htmlFor="printType">Print Type:</label>
          <select name="printType" id="printType">
            <option value="all">No Filter</option>
            <option value="books">Book</option>
            <option value="magazines">Magazine</option>
          </select>
          <label htmlFor="bookType">Book Type:</label>
          <select name="bookType" id="bookType">
            <option value="none">No Filter</option>
            <option value="free-ebooks">Free e-books</option>
            <option value="paid-ebooks">Paid e-books</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchSection;
