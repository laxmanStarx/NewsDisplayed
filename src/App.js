
import './App.css';
// import React from 'react'

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
  
  
  
} from "react-router-dom";

//Class based Component in which we write functions in this class
export default class App extends Component {
  pageSize = 12;
  apiKey= process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <BrowserRouter>
      <NavBar/>
      <LoadingBar
      height={6}
        color='#f11946'
        
        progress={this.state.progress}
        
      />
        <Routes>
          <Route exact path='/' element= { <News  setProgress={this.setProgress} apiKey={this.apiKey}key="general" pageSize={this.pageSize} country="us" category="general"/> }/>
          <Route exact path='/entertainment' element= { <News  setProgress={this.setProgress}apiKey={this.apiKey}key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/> }/>
          <Route exact path='/business' element= { <News  setProgress={this.setProgress}apiKey={this.apiKey}key="business" pageSize={this.pageSize} country="us" category="business"/> }/>
          <Route exact path='/health' element= { <News  setProgress={this.setProgress}apiKey={this.apiKey}key="health" pageSize={this.pageSize} country="us" category="health"/> }/>
          {/* <Route exact path='/' element= { <News  setProgress={this.setProgress}apiKey={this.apiKey}"general" pageSize={this.pageSize} country="in" category="general"/> }/> */}
          <Route exact path='/science' element= { <News  setProgress={this.setProgress}apiKey={this.apiKey}key="science" pageSize={this.pageSize} country="us" category="science"/> }/>
          <Route exact path='/sports' element= { <News  setProgress={this.setProgress}apiKey={this.apiKey}key="sports" pageSize={this.pageSize} country="us" category="sports"/> }/>
          <Route exact path='/technology' element= { <News  setProgress={this.setProgress}apiKey={this.apiKey}key="technology" pageSize={this.pageSize} country="us" category="technology"/> }/>
        </Routes>
      </BrowserRouter>
    )
  }
}

// export default class App extends Component {
  
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//         <NavBar/>
//         {/* <News  setProgress={this.setProgress}pageSize={this.pageSize} country='us' category="sports"/> */}
        
        
//         <Routes>
//         <Route exact path="/"><News  setProgress={this.setProgress}apiKey={this.apiKey}"general" pageSize={this.pageSize} country='us' category="general"/></Route>
//         <Route exact path="/business"><News  setProgress={this.setProgress}apiKey={this.apiKey}"business" pageSize={this.pageSize} country='us' category="business"/></Route>
//         <Route exact path="/entertainment"><News  setProgress={this.setProgress}apiKey={this.apiKey}"sports" pageSize={this.pageSize} country='us' category="sports"/></Route>
//         <Route exact path="/general"><News  setProgress={this.setProgress}apiKey={this.apiKey}"entertainment" pageSize={this.pageSize} country='us' category="entertainment"/></Route>
//         <Route exact path="/health"><News  setProgress={this.setProgress}apiKey={this.apiKey}"health"pageSize={this.pageSize} country='us' category="health"/></Route>
//         <Route exact path="/science"><News  setProgress={this.setProgress}apiKey={this.apiKey}"science" pageSize={this.pageSize} country='us' category="science"/></Route>
//         <Route exact path="/sports"><News  setProgress={this.setProgress}apiKey={this.apiKey}"sports" pageSize={this.pageSize} country='us' category="sports"/></Route>
//         <Route exact path="/technology"><News  setProgress={this.setProgress}apiKey={this.apiKey}"technology"pageSize={this.pageSize} country='us' category="technology"/></Route>

//         </Routes>
//         </BrowserRouter>
//         </div>
        
      
//     )
//   }
// }





