import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import './pages.css';
import Relatedpost from '../components/Relatedpostsidebar';
import Comment from './Comment';


const Singeblog = () => {
    const {id,category} = useParams();
   
    const [data, setData] = useState([]);
    const [comment,setComment]=useState();
    const token=localStorage.getItem('token');
   
    const doComment = async()=>{
        const res= await fetch(`http://localhost:5000/comment/${id}`,{
            method:'POST',
            headers:{'content-type':'application/json',token:token},
            body:JSON.stringify({comment:comment})
        });
        alert('Your comment is Posted')
    }
  
    useEffect(()=>{
        fetch(`http://localhost:5000/getblogs/${id}`).then((result)=>{
            result.json().then((response)=>{
                setData(response)
            })
        })
    },[id]);
   
    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 border">
                    {data.map((item)=>{
                        return(
                        <>
                        <img src={item.image} alt="" className='check-product-image' style={{width:200,height:200}} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{item.tags.map((tag)=>{return(
                        <>
                            <NavLink to={`/fetchbytags/${tag}`} className="blog-tags">{tag}</NavLink>
                        </>
                        )})}</p>
                        </>
                        )
                    })}
                 <div>{<Comment id={id}/>}</div>
             
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Write your comment here</label>
                        <textarea class="form-control" value={comment} onChange={(e)=>setComment(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                        {!localStorage.getItem('token')? <form className="d-flex">
        <NavLink className="btn btn-primary mx-2" style={{backgroundColor:"teal"}} to="/login" role="button">Login</NavLink>
        <NavLink className="btn btn-primary mx-2" style={{backgroundColor:"teal"}} to="/signup" role="button">Sign up</NavLink> 
      </form>: <button className="btn btn-primary" style={{backgroundColor:"teal"}} onClick={doComment}>Post comment</button>}
                    </div>
                </div>
                <div className="col-md-4 border">
                    <h2>Related Posts</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <Relatedpost category={category} ></Relatedpost>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Singeblog