import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
const ViewQuestion = () => {
    const [question,setQuestion]=useState([]);
    
    
    useEffect(()=>{
        const fetchQuestion= async()=>{
            const res= await fetch('http://localhost:5000/fetchquestion',{
                method:'GET',
                headers:{'content-type':'application/json'}
            });
            setQuestion(await res.json())
            
        }
        
        fetchQuestion()},[])
    return (
        <div>
            <h4 className='pt-4'>This is view question page..</h4>
            <div classNameName="container">
                <div className="row">
            
              {question.map((item)=>{return <>
                <div className="col-sm-6 p-2">
                        <div className="card">
                            <div className="card-body">
        
                                <p className="card-text">{item.question}</p>
                                <p>{item.tags.map((tag)=>{return(
                        <>
                            <NavLink to={`/fetchbytags/${tag}`} className="blog-tags">{tag}</NavLink>
                        </>
                        )})}</p>
                                <NavLink to={`/singlequestion/${item._id}`} className="btn btn-danger">View Question</NavLink>
                            </div>
                        </div>
                    </div>
              
              </>})}
                
                </div>
            </div>
        </div>
    )
}

export default ViewQuestion