import React from "react";
import Header from "../Header";
import SearchSection from "../Searchsection/SearchSection";
import ResultsSection from "../ResultsSection/ResultsSection";

class BooksearchApp extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "Harry Potter",
      printType: "All",
      bookType: "No Filter",
      bookResults: {},
      showResults: false,
    };
  }

  handlePrintTypeChange(event) {
    const newPrintType = event.target.value;
    this.setState({
      printType: newPrintType,
    });
  }

  handleBookTypeChange(event) {
    const newBookType = event.target.value;
    this.setState({
      bookType: newBookType,
    });
  }

  handleSearchSubmit(event) {
    const newSearchTerm = event.target.value;
    this.setState({
      searchTerm: newSearchTerm,
    });
  }

  componentDidMount() {
    const baseUrl = "https://www.googleapis.com/books/v1/volumes";
    const key = "AIzaSyDCeeZEadD_ReY_6r_eJ_OlXxCATk0kEHE";
    const query = encodeURIComponent(this.state.searchTerm);

    const url = baseUrl + "?q=" + query + "&" + key;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong. Please try again.");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => this.setState({ bookResults: data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <Header />
        <SearchSection
          handleSearch={this.handleSearchSubmit}
          bookTypeChange={this.handleBookTypeChange}
          printTypeChange={this.handlePrintTypeChange}
        />
        <ResultsSection results={this.state.bookResults} />
      </>
    );
  }
}

export default BooksearchApp;
