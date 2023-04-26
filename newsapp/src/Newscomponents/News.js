import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    console.log("I am  constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c74d2d04ee8c4ad8b6165998d302dba5&pageSize-20";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }

  handlePrevClick = async () => {
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c74d2d04ee8c4ad8b6165998d302dba5&page=${
      this.state.page - 1
    }&pageSize-20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (Math.ceil(this.state.totalResults / 20) < this.state.page + 1) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c74d2d04ee8c4ad8b6165998d302dba5&page=${
        this.state.page + 1
      }&pageSize-20`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({ articles: parseData.articles });
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2> NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 20) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-warning mx-3 my-10"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr;Previous{" "}
          </button>
          <button
            type="button"
            className="btn btn-warning mx-3 my-10"
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
