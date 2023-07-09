import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title,description,url,newsurl,author,date,source} = this.props;
    return (

      <div className='my-3'>
        <div className="card" style= {{display:'flex', justifyContent:'flex-end',right:'0',position:'absolute'}} >
        <span className=" badge rounded-pill bg-dander"> {source}</span>
        </div>
  <img src={url?url:"http://cdn.wionews.com/sites/default/files/2023/07/04/364362-star-sun-earth-coronal-mass-ejection-cme-solar-flare-black-hd-wallpaper-preview.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p  className="card-text"><small className="text-muted">by {author?author:"Unknown"}on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target='blank' className="btn btn-primary">Read more</a>
    </div>
    </div>  
    )
  }
}
 