import { useEffect } from "react";
import { useState} from "react";
import '../App.css';

export default function Votes ({articleData, setArticleData, articleIdRoute}) {

const [isLoading, setIsLoading] = useState(true)
const [voteCount, setVoteCount] = useState(0)
const[err, setErr]= useState('')

const HandleUpVotes = () => {
    setIsLoading(true);
    setVoteCount(+1)
    setErr(null)
    fetch(`https://hannybees-news-app.herokuapp.com/api/articles${articleIdRoute}`, {
method: 'PATCH',
body: JSON.stringify({
inc_votes: voteCount,
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
    setVoteCount(-1)
    setErr(null)
    fetch(`https://hannybees-news-app.herokuapp.com/api/articles${articleIdRoute}`, {
method: 'PATCH',
body: JSON.stringify({
inc_votes: voteCount,
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
    <div className="voting_box">
<button className="likeButton" onClick={(HandleUpVotes)}>UP VOTE</button>
<button className="dislikeButton" onClick={(HandleDownVotes)}>DOWN VOTE</button>
</div>
)


}