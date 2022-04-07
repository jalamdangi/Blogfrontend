import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import './pages.css';
import Relatedpost from '../components/Relatedpostsidebar';


const Singeblog = () => {
    const {id,category} = useParams();
    console.log(category);
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/getblogs/${id}`).then((result)=>{
            result.json().then((response)=>{
                setData(response)
            })
        })

    },[id])
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
             
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Write your comment here</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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