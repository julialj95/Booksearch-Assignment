import React from "react";

class SearchSection extends React.Component {
  render() {
    const {
      handleSubmit,
      handleSearch,
      searchTerm,
      printTypeChange,
      bookTypeChange,
      bookType,
      printType,
    } = this.props;

    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search:</label>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="Search Title"
          value={searchTerm}
          onChange={(event) => handleSearch(event)}
        />
        <button>Search!</button>
        <div className="filters">
          <label htmlFor="printType">Print Type:</label>
          <select
            name="printType"
            id="printType"
            value={printType}
            onChange={(event) => printTypeChange(event)}
          >
            <option value="all">All</option>
            <option value="books">Book</option>
            <option value="magazines">Magazine</option>
          </select>
          <label htmlFor="bookType">Book Type:</label>
          <select
            name="bookType"
            id="bookType"
            value={bookType}
            onChange={(event) => bookTypeChange(event)}
          >
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
