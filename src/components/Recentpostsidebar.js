import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

const Recentpostsidebar = () => {
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
        <>{
            data.map((post)=>{
                return(
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{post.title}</h5>
                        <p class="card-text text-truncate">{post.description}</p>
                        <NavLink to={`/singleblog/${post._id}`} className="btn btn-success">Read More</NavLink>
                    </div>
                </div>
                )
            })
        }
        </>
    )
}

export default Recentpostsidebar