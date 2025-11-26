import { Link } from 'react-router-dom';

function NavBar() {
    return (

<nav  className="navbar navbar-expand-lg bg-body-tertiary" style={{
            backgroundColor: "blue", color: "white", padding:
                "10px" , top:"0"
        }} >
  <div style={{
            backgroundColor: "blue", color: "white", padding:
                "10px"
        }} className="container-fluid">
    <a style={{
            backgroundColor: "blue", color: "white", padding:
                "10px"
        }} className="navbar-brand" href="#">Navbar</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a style={{
            backgroundColor: "blue", color: "white", padding:
                "10px"
        }} className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a style={{
            backgroundColor: "blue", color: "white", padding:
                "10px"
        }} className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input style={{
            backgroundColor:"rgb(32, 196, 142)", color: "white", padding:
                "10px"
        }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

 );
}
export default NavBar;