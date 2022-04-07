import React, { useEffect , useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Recentpostsidebar from '../components/Recentpostsidebar';
import './pages.css';

const BlogCategory = () => {
    const {category} = useParams();
    console.log(category);
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/fetchbycategory/${category}`).then((result)=>{
            result.json().then((response)=>{
                setData(response)
            })
        })
    },[])
    // console.log(data)
  return (
    <>
    <div className="container">
        <h3 className='p-2'>This is Category Page</h3>
        <div className="row">
            <div className="col-md-9">
                <div className="row">
        {
        data.slice(0,8).map((item)=>{ 
            return(
                  <>
                  <div className="card col-md-6 p-2">
                    <img className="card-img-top" src={item.image} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-truncate">{item.description}</p>
                    <p>{item.tags.map((tag)=>{return(
                      <>
                      <NavLink to={`/fetchbytags/${tag}`} className="blog-tags">{tag}</NavLink>
                      </>
                    )})}</p>
                    <NavLink to={`singleblog/${item._id}`} className="btn btn-info">Read More</NavLink>
                    </div>
                 </div>
                  </>
                    )
                 })
            }
            </div>
            </div>
            <div className="col-md-3">
              <div className="row border">
              <h3 className='pl-3'>Recent Posts</h3>
              
                <Recentpostsidebar></Recentpostsidebar>
              
            </div>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default BlogCategory






