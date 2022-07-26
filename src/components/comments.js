import { useEffect } from "react";
import { useState} from "react";
import '../App.css';
import LoadingSpinner from "./LoadSpinner";



export default function Comments ({articleIdRoute}){
const[commentData, setCommentData] = useState([])
const [isLoading, setIsLoading] = useState(true)
const[newComment, setNewComment] = useState('')
const [err, setErr] = useState(true)


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


 useEffect(() => {
     setIsLoading(true)
    fetch(`https://hannybees-news-app.herokuapp.com/api/articles${articleIdRoute}/comments`).then((response) => {
        return response.json();
    }).then((data) => {
            setCommentData(() => {
               return data
                
            }).catch((err) =>{
                setErr(err)
            })
        
        })
        setIsLoading(false);
    },[articleIdRoute]);


    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true);
        setErr(null)
        fetch(`https://hannybees-news-app.herokuapp.com/api/articles${articleIdRoute}/comments`, {
    method: 'POST',
    body: JSON.stringify({
    username:'cooljmessy',
    body: `${newComment}`,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    }).then((response) => response.json())
    .then((json) => setCommentData((currData)=>[json.comment,...currData])).catch((err)=>{
    setNewComment('')
    setErr('Something went wrong, please try again.')
    setIsLoading(false)
    })

    }  
    const handleDelete = (event) => {
    event.preventDefault()
    setIsLoading(true);
    setErr(null)
    fetch(`https://hannybees-news-app.herokuapp.com/api/comments/${event.target.className}`, {
            method: 'DELETE',
}).then(() =>{
    fetch(`https://hannybees-news-app.herokuapp.com/api/articles${articleIdRoute}/comments`).then((response) => {
    return response.json();
}).then((data) => {
    setCommentData(() => {
        return data
     }).catch((err) => {
         setErr(err)
     })
 })
 setIsLoading(false)
},[commentData], isLoading);
    }

return(

<div>
{err? err: null}
    {isLoading? <LoadingSpinner/>: null}
    <h2 className ="comment_section_header">Comment section</h2>
<div className = "commentsContainer">
{commentData.map((comment)=> {
    return (<div className = "comment_container">
        <img  alt={`${comment.author} avatar`}className = 'commenter_avatar'src={getAvatarUrl(comment.author)}/>
        <h5 className = "commenter_username">{comment.author}</h5>
        
        <h5 className = "commenter_votes">Comment votes: {comment.votes}</h5>
        {comment.author === "cooljmessy"? <button className ={`${comment.comment_id}`} onClick={handleDelete}>Delete Comment</button>: null}
    <p className="comment_body" >{comment.body}</p>
    
    </div>
    )
})}
</div>
<form className="postComment" onSubmit={handleSubmit} >
  <label className="commentBox">
    <input type="text" className="comment" placeholder="Enter comment here..." minLength="10" value={newComment} onChange={(event) => setNewComment(event.target.value)}required/>
  </label>
  <input type="submit" value="Submit" />
</form>
</div>
)



}
