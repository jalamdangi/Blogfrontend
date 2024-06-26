import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Userblog = () => {
    const[data,setData]=useState([]);
    const [blog,setBlog]=useState('');
    const token=localStorage.getItem('token');

    const fetchUserBlog= async()=>{
        const response=await fetch('http://localhost:5000/userblog',{
            method:'GET',
            headers:{'content-type':'application/json', token:token}
        });
        setData(await response.json());
        
    }

   useEffect(()=>{fetchUserBlog()},[]);
  return (
    <div>
        <h4>Your Blogs</h4>
        <h5>This is view post page</h5>
        <div>
          {
              data.map((item,index)=>{ 
                return(
                      <>
                      <h4>{index+1}</h4>
                      <div className="card col-md-6">
                        <img className="card-img-top" src={item.image} alt="Card image cap" style={{height:300}}/>
                        <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h6>Category : {item.category}</h6>
                        <p className="card-text text-truncate">{item.description}</p>
                        <p>{item.tags.map((tag)=>{return(
                          <>
                          <NavLink to={`/fetchbytags/${tag}`} className="blog-tags">{tag}</NavLink>
                          </>
                        )})}</p>
                        <NavLink to={`/singleblog/${item._id}/${item.category}`} className="btn btn-info">Read More</NavLink>
                        <NavLink to={`/editpost/${item._id}`} className="btn btn-info">Edit Post</NavLink>
                        </div>
                     </div>
                      </>
                        )
                     })
                }
        </div>
    </div>
  )
}

export default Userblog