import React from "react";

class ResultItem extends React.Component {
  render() {
    const { title, author, imageUrl, description } = this.props;
    return (
      <div className="result-item">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <img src={imageUrl} alt="" />
        <p>{description}</p>
      </div>
    );
  }
}

export default ResultItem;
