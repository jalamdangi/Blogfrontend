import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import './pages.css';


const Singeblog = () => {
    const {id} = useParams();
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/getblogs/${id}`).then((result)=>{
            result.json().then((response)=>{
                setData(response)
            })
        })

    },[])
    //  console.log(`http://localhost:5000/getblogs/${id}`);
    //  console.log(data)


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
                            <NavLink to={`/fetchbytags/${tag}`} style={{margin:"10px"}}>{tag}</NavLink>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tempore, repellat animi vero distinctio eaque molestias quaerat voluptatum rem beatae cupiditate delectus quis dolorum excepturi mollitia quo ab officia fuga repellendus nihil iusto consequatur quod libero! Alias eos est iste nobis hic facilis amet quia laudantium pariatur obcaecati, qui iure. </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tempore, repellat animi vero distinctio eaque molestias quaerat voluptatum rem beatae cupiditate delectus quis dolorum excepturi mollitia quo ab officia fuga repellendus nihil iusto consequatur quod libero! Alias eos est iste nobis hic facilis amet quia laudantium pariatur obcaecati, qui iure. </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tempore, repellat animi vero distinctio eaque molestias quaerat voluptatum rem beatae cupiditate delectus quis dolorum excepturi mollitia quo ab officia fuga repellendus nihil iusto consequatur quod libero! Alias eos est iste nobis hic facilis amet quia laudantium pariatur obcaecati, qui iure. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Singeblog