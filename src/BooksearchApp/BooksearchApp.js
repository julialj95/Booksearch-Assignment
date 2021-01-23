import React from "react";
import Header from "../Header";
import SearchSection from "../Searchsection/SearchSection";
import ResultsSection from "../ResultsSection/ResultsSection";

class BooksearchApp extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      printType: "all",
      bookType: "",
      bookResults: {},
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBookType = this.handleBookType.bind(this);
    this.handlePrintType = this.handlePrintType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handlePrintType(event) {
    this.setState({ printType: event.target.value });
  }

  handleBookType(event) {
    this.setState({ bookType: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const baseUrl = "https://www.googleapis.com/books/v1/volumes";
    const key = "AIzaSyDCeeZEadD_ReY_6r_eJ_OlXxCATk0kEHE";
    let queryParams;
    this.state.bookType === ""
      ? (queryParams = {
          q: this.state.searchTerm,
          printType: this.state.printType,
        })
      : (queryParams = {
          q: this.state.searchTerm,
          filter: this.state.bookType,
          printType: this.state.printType,
        });
    const queryString = Object.keys(queryParams)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
      )
      .join("&");

    const url = baseUrl + "?" + queryString + "&" + key;
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
    const objectLength = Object.keys(this.state.bookResults).length;
    const resultsDisplay = !objectLength ? (
      <h1>No results:</h1>
    ) : (
      <ResultsSection results={this.state.bookResults} />
    );
    return (
      <>
        <Header />
        <SearchSection
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
          bookTypeChange={this.handleBookType}
          printTypeChange={this.handlePrintType}
          handleSubmit={this.handleSubmit}
          bookType={this.state.bookType}
          printType={this.state.printType}
        />
        {resultsDisplay}
      </>
    );
  }
}

export default BooksearchApp;
