import React, { useEffect,useState } from 'react'

import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

//News function props(properties) are passed into the function
const News =(props)=> {
  const [articles,setArticles] = useState([])
  const [looding,setLooding] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
  // document.title = `${this.captitalizeFirstLetter(props.category)} - NewsMonkey`;

  // this function is used to capital the first letter of a word and string slice is used to slice the specific characters of a string
  const captitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
   
  

  // constructor(props) {
  //   super(props);
  //   console.log("Hello i am a constructor");
  //   this.state = {
  //     articles: [],
  //     loading:false,
  //     page:1,
  //     totalResults:0
      

  //   }
    
  // }
  const  updateNews=async()=>{
    props.setProgress(18);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`

    setLooding(true);
    let data = await fetch(url);
    props.setProgress(36);
    let parsedData = await data.json()
    props.setProgress(72);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLooding(false)




    // console.log(parsedData);
    // this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    props.setProgress(100);

  }
  useEffect(()=>{
     updateNews();
  },[])
  
  const handlePrevClick = async()=>{
    setPage(page-1)
    updateNews();


  }
  const handleNextClick = async()=>{
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize))){

    
    
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6a0b28ff5eb249579dbbe18fb34ade94&page=${this.state.page+1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // // this.setState({loading:false})
    
    // // this.setState({articles: parsedData.articles})
    //    this.setState({
    //     page:this.state.page +1,
    //     articles:parsedData.articles,
    //     loading:false
    


    // })
    
    setPage(page+1)
    updateNews();
}
 const fetchMoreData = async() => {
  setPage(page+1)
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    // this.setState({loading: true});
    // setLooding(true);
    let data = await fetch(url);
    let parsedData = await data.json()
    
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // this.setState({
    //   articles: articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false})
  
};

   
  
  
    return (
      <>
      
        <h2 className="text-center" style={{margin:'32px 0px'}}>NewsApp - Top Headlines from {captitalizeFirstLetter(props.category)}- Headlines</h2>
        {looding && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        { articles.map((element)=>{
          return <div className="col-md-4"key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        // <div className="col-md-4">
        //   <NewsItem title="myTitle" description="mydesc" />
        // </div>
        // <div className="col-md-4">
        //   <NewsItem title="myTitle" description="mydesc" />
        // </div>

        })}

        </div>
        </div>
        </InfiniteScroll>
        
        </>
        // {/* <div className="container d-flex justify-content-between"> */}
        // {/* <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr;previous</button>
        // <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}type="button" className="btn btn-success"onClick={this.handleNextClick}>Next &rarr;</button>
        // </div> */}
      

    )
    
  
}
News.defaulltProps = {
  country: 'us',
  pagesize:8,
  category:'general'
}
News.propTypes ={
  country: PropTypes.string,
  pageSize:5,
  category:PropTypes.string,
}

export default News;

// 6a0b28ff5eb249579dbbe18fb34ade94
