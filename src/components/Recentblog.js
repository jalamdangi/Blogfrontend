import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Recentblog = () => {
    const [data , setData] = useState([]);
    useEffect(()=>{
      fetch('http://localhost:5000/allblogs').then((result)=>{
          result.json().then((response)=>{
              setData(response);
            //console.log(response);
          })
      })  
    },[])
  return (
    <>
      <div className="row">
            {
            data.slice(0,8).map((post)=>{
            return(
            <div className="col-md-3 p-2">
                <div className="card">
                    <img className="card-img-top" src={post.image} alt="Card image cap" style={{height:200}}/>
                    <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-truncate">{post.description}</p>
                    <NavLink to={`singleblog/${post._id}`} className="btn btn-info">View More</NavLink>
                    </div>
                </div>
            </div>
                )
            })
            }
        </div>
    </>
  )
}

export default Recentblog