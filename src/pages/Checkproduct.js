import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import './pages.css';


const Checkproduct = () => {
    const {id} = useParams();
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`).then((result)=>{
            result.json().then((response)=>{
                setData(response)
            })
        })

    },[])
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 border">
                    <img src={data.image} alt="" className='check-product-image' style={{width:200,height:200}} />
                    <h2>{data.id} {data.title}</h2>
                    <p>{data.description}</p>
                </div>
                <div className="col-md-4 border">
                    <h2>Recent Posts</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tempore, repellat animi vero distinctio eaque molestias quaerat voluptatum rem beatae cupiditate delectus quis dolorum excepturi mollitia quo ab officia fuga repellendus nihil iusto consequatur quod libero! Alias eos est iste nobis hic facilis amet quia laudantium pariatur obcaecati, qui iure. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkproduct