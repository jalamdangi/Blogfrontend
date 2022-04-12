import React, { useEffect , useState } from 'react';
import { NavLink } from 'react-router-dom';
import Recentblog from '../components/Recentblog';
import Sidebar from '../components/Recentpostsidebar';
import './pages.css';

const Blog = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allblogs').then((result)=>{
            result.json().then((response)=>{
                setData(response)
            })
        })
    },[])
    // console.log(data)
  return (
    <>
    <div className="container-fluid">
        <h3 className='p-2'>All Posts</h3>
        <div className="row">
            <div className="col-md-9">
                <div className="row">
        {
        data.slice(0,8).map((item)=>{ 
            return(
                  <>
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
                    <NavLink to={`singleblog/${item._id}/${item.category}`} className="btn btn-info">Read More</NavLink>
                    </div>
                 </div>
                  </>
                    )
                 })
            }
            </div>
            </div>
            <div className="col-md-3 blog-recentpost-section">
              <div className="row border">
                <h3 className='pl-3'>Recent Posts</h3>
                <div className="row">
                  <div className="col-md-12">
                      <Sidebar></Sidebar>
                  </div>
              </div>
            </div>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Blog






