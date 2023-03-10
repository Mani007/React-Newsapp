import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,discription,imageURL, url} = this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">
              {discription}.....
            </p>
            <a href={url} target="_blank" className="btn btn-primary">
              READ MORE
            </a>
          </div>
        </div>
      
    );
  }
}
