import { useEffect } from "react";
import { useState} from "react";
import '../App.css';


export default function Votes ({articleData, setArticleData, articleIdRoute}) {

const [voteCount, setVoteCount] = useState(0)
const [err, setErr] = useState(null)
const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
    setVoteCount(articleData.votes);
}, [articleData])



const HandleUpVotes = () => {
    setVoteCount((curr) => curr +1);
setErr(null)
setIsLoading(true)
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
setIsLoading(false)
}

        
const HandleDownVotes = () => {
    setVoteCount((curr) => curr -1)
    setErr(null)
    setIsLoading(true)
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
setIsLoading(false)
}  

return(
    <div>
        {isLoading? isLoading : null}
        {err? err : null}
    <h2 className= "article_votes"> Article Votes: {voteCount}</h2>
    <div className="voting_box">
<button className="likeButton" onClick={(HandleUpVotes)}>UP VOTE</button>
<button className="dislikeButton" onClick={(HandleDownVotes)}>DOWN VOTE</button>
</div>
</div>
)


}