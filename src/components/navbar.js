import {Link} from "react-router-dom";


function NavBar() {
return (

<nav className ="navBar">
  <div className="bar"><Link to="/allArticles">All Articles</Link></div>
  <div className="bar"><Link to="/">Homepage</Link></div>
  <div className="bar"><Link to="/Weather">Weather</Link></div>
</nav>
)
}

export default NavBar;