
// import './App.css';
// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// // import Sports from './components/Sports';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//       <div>
//       <NavBar/>
      
    
//        <Routes>
        
//           <Route exact path="/" key ="home">            { <News pageSize={6}  country ="in" category ="home"/>    } </Route>
//            <Route exact path="/sports" key ="sports">    {<News pageSize={6}  country ="in" category ="sports"/>}</Route>
//  <Route exact path="/entertainment" key ="entertainment">{<News pageSize={6}  country ="in" category ="entertainment"/>}</Route>
//            <Route exact path="/health" key ="health">    {<News pageSize={6}  country ="in" category ="health"/>}</Route>
//        <Route exact path="/bussiness" key ="bussiness">  {<News pageSize={6}  country ="in" category ="bussiness"/>}</Route>
//            <Route exact path="/science" key ="science">  {<News pageSize={6}  country ="in" category ="science"/>}</Route>
//       <Route exact path="/technology" key ="technology"> {<News pageSize={6}  country ="in" category ="technology"/>}</Route>
//            <Route exact path="/general" key ="general">  {<News pageSize={6}  country ="in" category ="general"/>}</Route> 
//         </Routes>
//       </div>
//       </Router> 
//     )
//   }
// }


// import './App.css';
// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// // import Sports from './components/Sports';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//       <div>
//       <NavBar/>
//       {/* <News pageSize={6}  country ="in" category ="home"/> */}
    
//        <Routes>
//           <Route exact path="/" key ="home">            { <News pageSize={6}  country ="in" category ="home"/>    } </Route>
//            <Route exact path="/sports" key ="sports">    {<News pageSize={6}  country ="in" category ="sports"/>}</Route>
//  <Route exact path="/entertainment" key ="entertainment">{<News pageSize={6}  country ="in" category ="entertainment"/>}</Route>
//            <Route exact path="/health" key ="health">    {<News pageSize={6}  country ="in" category ="health"/>}</Route>
//        <Route exact path="/bussiness" key ="bussiness">  {<News pageSize={6}  country ="in" category ="bussiness"/>}</Route>
//            <Route exact path="/science" key ="science">  {<News pageSize={6}  country ="in" category ="science"/>}</Route>
//       <Route exact path="/technology" key ="technology"> {<News pageSize={6}  country ="in" category ="technology"/>}</Route>
//            <Route exact path="/general" key ="general">  {<News pageSize={6}  country ="in" category ="general"/>}</Route> 
//         </Routes>
//       </div>
//       </Router> 
//     )
//   }
// }
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News";
import NavBar from './components/NavBar';


export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress)=> {
    this.setState({ progress: progress });
  }
  render() {
    return (
     
      <BrowserRouter>
  
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress} 
                apiKey={this.apiKey}
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress} 
                apiKey={this.apiKey}
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress} 
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress} 
                apiKey={this.apiKey}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress} 
                apiKey={this.apiKey}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress} 
                apiKey={this.apiKey}
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress} 
                apiKey={this.apiKey}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress} 
                apiKey={this.apiKey}
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}




echo "# newsapp" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/kapoorgautam/newsapp.git
git push -u origin main