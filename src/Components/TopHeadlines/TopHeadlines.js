import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadlines = () => {
    const [news,setNews] = useState([])
    useEffect(() => {
        fetch ('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bee05a5023a74e43aa05de6f147f2970')
        .then( res => res.json())
        .then (data => setNews (data.articles) )
    },[])
    console.log (news)
    return (
        <div>
            <h1>total headlines: {news.length}</h1>
            {
                news.map(news => <News news={news}></News> )
            }
        </div>
    );
};

export default TopHeadlines;