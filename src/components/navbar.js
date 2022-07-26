import {Link} from "react-router-dom";


function NavBar() {
return (

<nav className ="navBar">
  <div className="bar"><Link to="/allArticles" style={{ textDecoration: 'none' }}>View all Articles</Link></div>
  <div className="bar"><Link to="/" style={{ textDecoration: 'none' }}>Homepage</Link></div>
  <div className="bar"><Link to="/Weather" style={{ textDecoration: 'none' }}>Weather</Link></div>
</nav>
)
}

export default NavBar;