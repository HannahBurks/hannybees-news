import { useEffect } from "react";
import { useState} from "react";
import '../App.css';



export default function Comments ({articleIdRoute}){
const[commentData, setCommentData] = useState([])
const [isLoading, setIsLoading] = useState(true)
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
    fetch(`https://hannybees-news-app.herokuapp.com/api/articles${articleIdRoute}/comments`).then((response) => {
        return response.json();
    }).then((data) => {
            setCommentData(() => {
               return data
                
            })
            setIsLoading(false);
        })
    },[]);


return(

<div>
    <h2>Comment section</h2>
<div className = "commentsContainer">
{commentData.map((comment)=> {
    return (<div className = "comment_container">
        <img className = 'commenter_avatar'src={getAvatarUrl(comment.author)}/>
        <h5>user:{comment.author}</h5>
        <h6>Comment votes:{comment.votes}</h6>
    <p>{comment.body}</p>
    </div>
    )
})}
</div>
</div>
)


}

