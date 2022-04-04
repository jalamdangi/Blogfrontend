import React, { useEffect , useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                    <img className="card-img-top" src={item.image} alt="Card image cap" style={{height:200,width:200}}/>
                    <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-truncate">{item.description}</p>
                    <p>{item.tags.map((tag)=>{return(
                      <>
                      <NavLink to={`/fetchbytags/${tag}`} style={{margin:"10px"}}>{tag}</NavLink>
                      </>
                    )})}</p>
                    <NavLink to={`singleblog/${item._id}`} className="btn btn-primary">Read More</NavLink>
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
              <div className="col-md-12">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates vel quam repellendus commodi laborum beatae, odit ducimus eaque. Velit in id porro ducimus maiores sapiente aperiam dolorum, molestias iure consequatur veniam. Impedit iure blanditiis minima sequi eos eius explicabo harum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates vel quam repellendus commodi laborum beatae, odit ducimus eaque. Velit in id porro ducimus maiores sapiente aperiam dolorum, molestias iure consequatur veniam. Impedit iure blanditiis minima sequi eos eius explicabo harum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates vel quam repellendus commodi laborum beatae, odit ducimus eaque. Velit in id porro ducimus maiores sapiente aperiam dolorum, molestias iure consequatur veniam. Impedit iure blanditiis minima sequi eos eius explicabo harum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates vel quam repellendus commodi laborum beatae, odit ducimus eaque. Velit in id porro ducimus maiores sapiente aperiam dolorum, molestias iure consequatur veniam. Impedit iure blanditiis minima sequi eos eius explicabo harum!</p>
              </div>
            </div>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Blog






