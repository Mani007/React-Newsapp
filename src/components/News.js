import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "business",
   
  };

  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apikey: PropTypes.string
    
  };
  // article = [
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "Gizmodo.com"
  //   },
  //   "author": "Lucas Ropek",
  //   "title": "OG Bitcoin Core Developer Claims Hack Drained Nearly All His BTC",
  //   "description": "Even cryptocurrency’s most accomplished tech wizards apparently aren’t immune from the occasional wallet-draining hack. Luke Dashjr, one of the original core developers for Bitcoin, claims that someone swiped hundreds of BTC from his accounts late last year—l…",
  //   "url": "https://gizmodo.com/bitcoin-price-hack-217-btc-og-developer-luke-dashjr-1849944799",
  //   "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c8e3b3fe0595dfbab3656a5ba0e06e2c.jpg",
  //   "publishedAt": "2023-01-03T20:48:00Z",
  //   "content": "Even cryptocurrencys most accomplished tech wizards apparently arent immune from the occasional wallet-draining hack. Luke Dashjr, one of the original core developers for Bitcoin, claims that someone… [+2723 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "reuters",
  //   "name": "Reuters"
  //   },
  //   "author": null,
  //   "title": "Bitcoin rises 5.5% to $19897 - Reuters",
  //   "description": "Bitcoin rose 5.54% to $19,897 at 22:13 GMT on Friday, adding $1,044 to its previous close.",
  //   "url": "https://www.reuters.com/technology/bitcoin-rises-55-19897-2023-01-13/",
  //   "urlToImage": "https://www.reuters.com/resizer/x2f-ufmS3E4Gt5u8Lu24vQUPfDA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U57W2HJZGRPTHE2MEDPR5RDSHQ.jpg",
  //   "publishedAt": "2023-01-13T22:24:00Z",
  //   "content": "Jan 13 (Reuters) - Bitcoin rose 5.54% to $19,897 at 22:13 GMT on Friday, adding $1,044 to its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is up 20.6% from the year's … [+277 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "Benzinga"
  //   },
  //   "author": "Mehab Qureshi",
  //   "title": "Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls' - Benzinga",
  //   "description": "Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls'  Benzinga\r\n</li><li>Bitcoin roars past $20K in surprise surge. Can the rally last?  Fortune Bitcoin rises 5.6% to $210…",
  //   "url": "https://www.benzinga.com/markets/cryptocurrency/23/01/30424910/bitcoin-surges-above-21k-ethereum-dogecoin-rally-intact-analyst-says-this-could-awaken-som",
  //   "urlToImage": "https://cdn.benzinga.com/files/images/story/2023/01/15/kanchanara-4kjjezdyo3m-unsplash.jpg?width=1200&height=800&fit=crop",
  //   "publishedAt": "2023-01-16T02:50:45Z",
  //   "content": "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession. \r\n<table><tr><th>Crypt… [+2581 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "reuters",
  //   "name": "Reuters"
  //   },
  //   "author": null,
  //   "title": "Cryptoverse: Bitcoin digs in for a bumpy new year - Reuters",
  //   "description": "Bitcoin's looking steady in 2023. But it's only been a week.",
  //   "url": "https://www.reuters.com/technology/cryptoverse-bitcoin-digs-bumpy-new-year-2023-01-10/",
  //   "urlToImage": "https://www.reuters.com/resizer/X3Jk6UQ0SKvWNnppKO5lu9_yqog=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ILQYPK7MD5I4LM3ZX2OQXO7HQ4.jpg",
  //   "publishedAt": "2023-01-10T06:15:00Z",
  //   "content": "Jan 10 (Reuters) - Bitcoin's looking steady in 2023. But it's only been a week.\r\nCryptocurrencies have crept into the new year, licking their wounds after the carnage of 2022. The overall global cryp… [+3311 chars]"
  //   }]
  constructor() {
    super();
    //console.log("This is news component")
    // this.state = {
    //   article: this.article,  //never sggested to do tis way, use setState method insted
    //   loading: false
    // }
    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
  }

  fetchMoreData = async() => {
    this.props.setProgress(10)
    this.setState({page: this.state.page +1})
    const ul = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(ul);
    this.props.setProgress(50)
    let parsedata = await data.json();
    this.props.setProgress(70)
    this.setState({
      article: this.state.article.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  };

  async newsUpdate() {
    this.props.setProgress(10)
    const ul = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(ul);
    this.props.setProgress(50)
    let parsedata = await data.json();
    this.props.setProgress(70)
    this.setState({
      article: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.newsUpdate();
  }

  // handleNext = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.newsUpdate();
  // };
  // handlePrev = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.newsUpdate();
  // };

  render() {
    return (
      <>
        <h3 className="text-center">
          <strong>Top Investment Oppurtunity</strong>
        </h3>
        {/* {this.state.loading && <Loading />} */}

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={ <Loading/>}
        >
          
        <div className="container my-3 text-center">
          <div className="row">
            {this.state.article.map((element) => {
              //console.log(element)
              return (
                <div className="col-sm col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    discription={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
                    }
                    imageURL={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                    }
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
          </div>
          </InfiniteScroll>
         
        
        </>
    );
  }
}
