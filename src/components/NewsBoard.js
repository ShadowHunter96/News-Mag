import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const[articles,setArticles]=useState([])

    useEffect(()=>{
        let url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=77d5d147e3c8494da2f3397f998281d2`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
    },[category])

  return (
    <div>
      <h2 className='text-center'>Latest<span className='badge bg-danger'>News</span></h2>
      {articles.map((news,index)=>{
         console.log(news.urlToImage)
        return<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} ></NewsItem>
        
      })}
    </div>
  )
}

export default NewsBoard
