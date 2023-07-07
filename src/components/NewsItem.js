import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title,description,url,newsurl} = this.props;
    return (

      <div>
        <div className="card" style= {{width : "18rem"}}>
  <img src={url?url:"http://cdn.wionews.com/sites/default/files/2023/07/04/364362-star-sun-earth-coronal-mass-ejection-cme-solar-flare-black-hd-wallpaper-preview.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target='blank' className="btn btn-primary">Read more</a>
    </div>
    </div>
   
      </div>
      
    )
  }
}
 