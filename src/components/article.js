import { useEffect } from "react";
import { useState} from "react";
import '../App.css';



export default function Article(){
    const articleIdRoute = window.location.pathname
const [articleData, setArticleData] = useState([])
const[commentData, setCommentData] = useState([])
const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://hannybees-news-app.herokuapp.com/api/articles${articleIdRoute}`).then((response) => {
            return response.json();
        }).then((data) => {
                setArticleData(() => {
                    return data.article
                    
                })
                setIsLoading(false);
            })
        },[]);


    useEffect(() => {
        fetch(`https://hannybees-news-app.herokuapp.com/api/articles${articleIdRoute}/comments`).then((response) => {
            return response.json();
        }).then((data) => {
                setCommentData(() => {
                   return data
                    
                })
                setIsLoading(false);
            })
        },[]);

  
    return (
<div className='Individual_article_container'>
    <div className='Article_container'>
<h2>{articleData.title}</h2>
<h3> Author: {articleData.author}</h3>
<h2> Article Votes:{articleData.votes}</h2>
<p>{articleData.body}</p>
</div>
<h2>Comment section</h2>
{commentData.map((comment)=> {
    return (<div className = "comment_container">
        <h5>user:{comment.author}</h5>
        <h6>Comment votes:{comment.votes}</h6>
    <p>{comment.body}</p>

    </div>
    )
})}
</div>

    )
}