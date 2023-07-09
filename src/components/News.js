import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {

  static defaultProps ={
       country : "in",
    
       category : 'general'
  }
 static propsTypes ={
  country : PropTypes.string,
  pageSize :PropTypes.number,
  category : PropTypes.string
     
 }
 
  constructor(){
    super();
    console.log("hello i am constructor from newsitem");
    this.state = 
          { news : [],
            page : 1,
            totalResults : 0,
            loading : false
        }
        ;

   }
   async UpdateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1d41350fe8b547079d3583e3a1db96ad&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    this.props.setProgress(30);

    let data = await fetch(url);
    this.props.setProgress(60);

    let parsedData = await data.json()
    this.props.setProgress(90);

    this.setState({
        page : this.state.page+1 ,
    news : parsedData.articles,
    totalResults:parsedData.totalResults,
  loading :false})
  this.props.setProgress(100);


   }

async componentDidMount(){
  console.log("cdm from newsitem");
  this.UpdateNews();

  }

//   handlePrevClick = async () =>{
//     console.log("previous")
//  this.setState({page  : this.state.page - 1})
//  this.UpdateNews();
//     }


  // handleNextClick = async () =>{
  // console.log("Next")

  //     this.setState({ page  : this.state.page + 1})
  //     this.UpdateNews();

    // }
    fetchMoreData = async() => {
     this.setState({page : this.state.page + 1})
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1d41350fe8b547079d3583e3a1db96ad&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
     this.setState({loading : true});
     let data = await fetch(url);
     let parsedData = await data.json()
     this.setState({
         page : this.state.page ,
     news : this.state.news.concat(parsedData.articles),
     totalResults:parsedData.totalResults,
   loading :false})
     
      
        };
  render() {
    return (
      <div className="container my-3 ">
        {/* <span style={{textAlign:"center",marginTop:"3rem" , color:"black"}}>Todays top Headlines are.. </span> */}
        <h1 style={{textAlign:"center",marginTop:"3rem"}}>TODAYS NEWS Headlines are..</h1>
       
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.news.length}
          next={this.fetchMoreData}
          hasMore={this.state.news.length !== this.state.totalResults}
          loader={this.state.news.length >=0 ? <Spinner /> : null}
        >
        <div className="row"  >

          { this.state.news.map((Element) =>
          { return <div className="col-md-4" key={Element.url}>
              <NewsItem
                title={Element.title?Element.title.slice(0, 45):""}
                description={Element.description?Element.description.slice(0, 88):""}
                url={Element.urlToImage}
                newsurl={Element.url}
                author={Element.author}
                date={Element.publishedAt}
                source={Element.source.name}
              />
            </div>
           }
          )}
        </div>
        </InfiniteScroll>
  
      </div>
    );
  }
}
