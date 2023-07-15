import React from 'react'
// arrow function named as NewsItem
const NewsItem = (props)=> {

  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position: 'absolute',
            right:'0'
          }

          }>
        <span class=" badge rounded-pill bg-danger" >{source}</span>
        </div>


          <img  src={!imageUrl ? "https://images.cnbctv18.com/wp-content/uploads/2022/06/Meta.jpg" : imageUrl} alt="Card image cap" />
          <div className="card-body">
            
            <h5 className="card-title">{title}</h5>
             

            <p className="card-text">{description}...</p>
            <p className="card-text"> <small className="text-muted">By {!author ? "unknown author" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>

    )
  
}

export default NewsItem
