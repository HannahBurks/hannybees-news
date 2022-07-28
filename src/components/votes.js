import { useEffect } from "react";
import { useState} from "react";
import '../App.css';

export default function Votes ({articleData, setArticleData, articleIdRoute}) {

const [isLoading, setIsLoading] = useState(true)
const [voteCount, setVoteCount] = useState(0)
const[err, setErr]= useState('')

useEffect(() => {
    setVoteCount(articleData.votes);
}, [articleData])



const HandleUpVotes = () => {
    setIsLoading(true);
    setVoteCount((curr) => curr +1);
    setErr(null)
    fetch(`https://hannybees-news-app.herokuapp.com/api/articles${articleIdRoute}`, {
method: 'PATCH',
body: JSON.stringify({
inc_votes: 1,
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
}).then((response) => response.json())
.then((json) => setArticleData(json.article)).catch((err)=>{
setVoteCount(-1)
setErr('Something went wrong, please try again.')
});

}

        
const HandleDownVotes = () => {
    setIsLoading(true);
    setVoteCount((curr) => curr -1)
    setErr(null)
    fetch(`https://hannybees-news-app.herokuapp.com/api/articles${articleIdRoute}`, {
method: 'PATCH',
body: JSON.stringify({
inc_votes: -1,
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
}).then((response) => response.json())
.then((json) => setArticleData(json.article)).catch((err)=>{
setVoteCount(+1)
setErr('Something went wrong, please try again.')
})

}  

return(
    <div>
    <h2 className= "article_votes"> Article Votes: {voteCount}</h2>
    <div className="voting_box">
<button className="likeButton" onClick={(HandleUpVotes)}>UP VOTE</button>
<button className="dislikeButton" onClick={(HandleDownVotes)}>DOWN VOTE</button>
</div>
</div>
)


}