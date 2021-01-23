import React from "react";
import Header from "../Header";
import SearchSection from "../Searchsection/SearchSection";
import ResultsSection from "../ResultsSection/ResultsSection";

class BooksearchApp extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      printType: "All",
      bookType: "No Filter",
      bookResults: {},
      // showResults: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({
      searchTerm: event.target.value,
    });
    console.log("search event triggered");
  }

  // handlePrintType() {
  //   // const newPrintType = event.target.value;
  //   // this.setState({ printType: newPrintType });
  //   console.log("print type event triggered");
  // }

  // handleBookType() {
  //   // const newBookType = event.target.value;
  //   // this.setState({ bookType: newBookType });
  //   console.log("book type event triggered");
  // }

  handleSubmit(event) {
    event.preventDefault();
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

  // componentDidMount() {
  //   const baseUrl = "https://www.googleapis.com/books/v1/volumes";
  //   const key = "AIzaSyDCeeZEadD_ReY_6r_eJ_OlXxCATk0kEHE";
  //   const query = encodeURIComponent(this.state.searchTerm);

  //   const url = baseUrl + "?q=" + query + "&" + key;

  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Something went wrong. Please try again.");
  //       }
  //       return response;
  //     })
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ bookResults: data }))
  //     .catch((err) => console.log(err));
  // }
  render() {
    const resultsDisplay = this.state.results ? (
      <ResultsSection results={this.state.bookResults} />
    ) : null;
    return (
      <>
        <Header />
        <SearchSection
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
          // bookTypeChange={this.handleBookType}
          // printTypeChange={this.handlePrintType}
          handleSubmit={this.handleSubmit}
          // bookType={this.state.bookType}
          // printType={this.state.printType}
        />
        {resultsDisplay}
      </>
    );
  }
}

export default BooksearchApp;
