import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

const Signup = () => {
  const navigate=useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setcPassword] = useState();
  const data={name:name,email:email,password:password};
  const [res,setRes]=useState([]);
 const handleSubmit = async(e)=>{
   e.preventDefault();
    const response= await fetch('http://localhost:5000/createuser',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data),
    });
  alert('Registeration Successfull..');
  navigate('/login');
   
 }
  return (
    <>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-md-6 border signup-img">
              <img src="images/image1.svg" alt="" />
            </div>
            <div className="col-md-6 border">
            <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Enter Name</label>
                  <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" className="form-control"  placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} className="form-control"  placeholder="Enter Email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} className="form-control"  placeholder="Password"/>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input type="password" className="form-control" onChange={(e)=>{setcPassword(e.target.value)}} value={cpassword}  placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Signup</button>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Signup