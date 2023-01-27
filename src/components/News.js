import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <strong>Latest News</strong>
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <NewsItem title="Title 1" discription="This is ONE discription" />
            </div>
            <div class="col-sm">
            <NewsItem title="Title 2" discription="This is TWO discription" />
            </div>
            <div class="col-sm">
            <NewsItem title="Title 3" discription="This is THREE discription" />
            </div>
          </div>
        </div>
                
      </div>
    );
  }
}
