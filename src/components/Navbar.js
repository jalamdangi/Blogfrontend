
 import {React,useEffect} from 'react'
 import { NavLink ,useNavigate,useLocation} from 'react-router-dom'
 const Navbar = () => {
   const navigate=useNavigate()
  const logOuthandle=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  let location=useLocation();
  useEffect(() => {
    
  }, [location])
  return (
 <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <NavLink className="navbar-brand" to="/">LUMENORE BLOG</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/blog">Blog</NavLink>
      </li>
     

      <li className="nav-item">
        <NavLink className="nav-link disabled" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled" to="/check">Check</NavLink>
      </li>
    </ul>
    {!localStorage.getItem('token')? <form className="d-flex">
        <NavLink className="btn btn-primary mx-2" style={{backgroundColor:"teal"}} to="/login" role="button">Login</NavLink>
        <NavLink className="btn btn-primary mx-2" style={{backgroundColor:"teal"}} to="/signup" role="button">Sign up</NavLink> 
      </form>: <button className="btn btn-primary" style={{backgroundColor:"teal"}} onClick={logOuthandle}>Logout</button>}
  </div>
</nav>
    </div>
  )
}

export default Navbar