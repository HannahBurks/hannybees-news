import { useEffect } from "react";
    import {useNavigate, useLocation} from 'react-router-dom';
    import { useState } from "react";
    import '../App.css';
import LoadingSpinner from "./LoadSpinner";
    

    export default function Categories(){
        const [articleData, setArticleData] = useState([])
        const [isLoading, setIsLoading] = useState(true);
       
    
        
        const navigate = useNavigate();
      
    
    
    function getAvatarUrl(user){
      const userRef = {
        tickle122:'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953',
        grumpy19:'https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013',
        happyamy2016: 'https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729',
        cooljmessy: 'https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002',
        weegembump:'https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553',
        jessjelly: 'https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141'
      }
      let result = userRef[user]
     return result
    }
    
    const categoryName = useLocation().state.name

   

        useEffect(() => {
          setIsLoading(true)
        fetch(`https://hannybees-news-app.herokuapp.com/api/articles?topic=${categoryName}`).then((response) => {
            return response.json();
          })
          .then((data) => {
            setArticleData(() => {
                return data.articles;
                
            })
            setIsLoading(false);
        })
    },[categoryName]);
    
    const capitalizedCategory = categoryName[0].toUpperCase() + categoryName.substring(1)
    
    
    return (<div>
      {isLoading && <LoadingSpinner/>}
             <div className ={`${categoryName}itemCard`}>
            <h1 className={`${categoryName}Header`}> {capitalizedCategory} Articles</h1>
             {articleData.map((article) => {
                return (
                  <div key={article.article_id} className="Partone_itemCard">
                    <img className = 'allArticles_avatar'src={getAvatarUrl(article.author)} alt ={`${article.author} avatar`}/>
                    <h6 className = "allArticles_author" >{article.author} </h6>
                    <h2 className="allArticles_title">{article.title}</h2>
                    <p className = "allArticles_body">{article.body} </p>
                    <button className ="articleButton" onClick={() => navigate(`/${article.article_id}`)} > Click to see full article</button>
                </div>
                )
                  })}
                  
                  </div>
    </div>
    )
    }
