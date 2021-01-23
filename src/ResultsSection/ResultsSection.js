import React from "react";
import ResultItem from "../ResultItem/ResultItem";

class ResultsSection extends React.Component {
  render() {
    const { results } = this.props;
    console.log(results);
    const bookResults = results.items.map((book, index) => {
      return (
        <ResultItem
          key={index}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors[0]}
          imageUrl={book.volumeInfo.imageLinks.thumbnail}
          description={book.description}
        />
      );
    });
    return (
      <div className="results">
        <h1>Results:</h1> {bookResults}
      </div>
    );
  }
}

export default ResultsSection;
