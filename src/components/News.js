import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps ={
       country : "in",
       pageSize : 6,
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
            loading : false
        }
        ;

   }

async componentDidMount(){
  console.log("cdm from newsitem");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1d41350fe8b547079d3583e3a1db96ad&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json()
   this.setState({page : this.state.page})
    this.setState({news : parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading :false
    
    }) 

  }

  handlePrevClick = async () =>{
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1d41350fe8b547079d3583e3a1db96ad&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json()
   

    this.setState({
        page : this.state.page - 1,
    news : parsedData.articles,
  loading :false})
    }


  handleNextClick = async () =>{
  console.log("Next")
  if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){}
  else{
    this.setState({loading : true});  
    let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1d41350fe8b547079d3583e3a1db96ad&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url1);
      let parsedData = await data.json()
     

      this.setState({ page  : this.state.page + 1,
                      news : parsedData.articles,
                    loading :false})
    }}

  render() {
    return (
      <div className="container my-3 ">
        <h1>Latest news</h1>
        {this.state.loading && <Spinner/>}
        <div className="row  my-3"  >
          {!this.state.loading && this.state.news.map((Element) =>
          { return <div className="col-md-4" key={Element.url}>
              <NewsItem
                title={Element.title?Element.title.slice(0, 45):""}
                description={Element.description?Element.description.slice(0, 88):""}
                url={Element.urlToImage}
                newsurl={Element.url}
              />
            </div>
           }
          )}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1}  className="btn btn-dark" onClick={this.handlePrevClick} > previews</button>
        <button type="button"  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}className="btn btn-dark"  onClick={this.handleNextClick}>next</button> 
      </div>
      </div>
    );
  }
}
