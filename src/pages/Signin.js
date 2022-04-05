import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const navigate=useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [text,setText]=useState();
  const data={username:username,password:text};
 const handleSubmit = async(e)=>{
   e.preventDefault();
    const response= await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data),
    });
 const res=await response.json();
 localStorage.setItem('token',res.token);
 navigate('/Userprofile');
  
 }
  return (
    <>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-md-6 border signup-img">
              <img src="images/image2.svg" alt="" />
            </div>
            <div className="col-md-6 border">
            <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" onChange={(e)=>setUserName(e.target.value)} value={username}  placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" onChange={(e)=>{setText(e.target.value)}} value={text} className="form-control"  placeholder="Password"/>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Signin