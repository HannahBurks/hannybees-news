import { useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import Article from "./article";
import { useSearchParams } from "react-router-dom";

export default function AllArticles() {
  const [articleData, setArticleData] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useSearchParams({});
  const navigate = useNavigate();


  function getAvatarUrl(user) {
    const userRef = {
      tickle122:
        "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
      grumpy19:
        "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
      happyamy2016:
        "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
      cooljmessy:
        "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
      weegembump:
        "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
      jessjelly:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
    };
    let result = userRef[user];
    return result;
  }

  useEffect(() => {
   
    fetch(
      `https://hannybees-news-app.herokuapp.com/api/articles?${searchParams}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticleData(() => {
          return data.articles;
        });
        setIsLoading(false);
      });
  }, [searchParams]);

  useEffect(() => {
    fetch("https://hannybees-news-app.herokuapp.com/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAuthorData(data.users);
      });
    setIsLoading(false);
  }, []);

  const HandleSortBy = (event) => {
    event.preventDefault();
if(event.target.value === "created_atO"){
  setSearchParams({sort_by: "created_at", order: "ASC"})
} else if (event.target.value === "votesL"){
  setSearchParams({sort_by: "votes", order: "ASC" })
}else{
  setSearchParams({sort_by: event.target.value});
}
  };



  return (
    <div>
      <div className="itemCard">
      <div className="sortby_container">
      <label for="sortBy"> Sort by:</label>
      <select id="sort" name="sortby"onChange={HandleSortBy}>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="topic">Topic</option>
        <option value="created_at">Newest</option>
        <option value="created_atO">Oldest</option>
        <option value="votes">Top voted</option>
        <option value="votesL">Least voted</option>
      </select>
      </div>
        {articleData.map((article) => {
          return (
            <div key={article.article_id} className="Partone_itemCard">
              <img
                className="allArticles_avatar"
                src={getAvatarUrl(article.author)}
              />
              <h6 className="allArticles_author">{article.author} </h6>
              <h2 className="allArticles_title">{article.title}</h2>
              <p className="allArticles_body">{article.body} </p>
              <button
                className={`${article.article_id}-button`}
                onClick={() => navigate(`/${article.article_id}`)}
              >
                {" "}
                Click to see full article
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
