import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewsItem extends Component {
  render() {
    let {title,discription,imageURL, url} = this.props;
    return (
        <div className="card" >
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">
              {discription}.....
            </p>
            <Link href={url} target="_blank" className="btn btn-primary">
              READ MORE
            </Link>
          </div>
        </div>
      
    );
  }
}
