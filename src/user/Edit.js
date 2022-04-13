import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const {id}=useParams();
    const [title,setTitle]=useState()
    const [description,setDescription]=useState()
    const [tag,setTag]=useState();
    const [image,setImage]=useState();
    const [fTag,setFtag]=useState([]);
    const [mytags,setMytag]=useState([]);
    const myTag=()=>{
        const newTag= mytags.map((item)=>item.tag)
          setFtag(fTag=>[...fTag,newTag[0]]);
        
        console.log(fTag)
      
      }
      const fetchTag = async (e)=>{
        e.preventDefault();
        const searchTag={tag:tag}
        const response= await fetch('http://localhost:5000/fetchtag',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(searchTag)
        });
        setMytag(await response.json())
        
      }
      useEffect(()=>{
          const getPost= async ()=>{
              const res= await fetch(`http://localhost:5000/getblogs/${id}`);
              const data=await res.json();
              console.log(data)
              setTitle(data[0].title)
              setDescription(data[0].description)
              setImage(data[0].image)
              setFtag(data[0].tags)
            
            
          }
        getPost()
    },[id]);
    const editPost = async (e)=>{
        e.preventDefault()
        const token=localStorage.getItem('token')
        const newPost={title:title,description:description,tags:fTag,image:image}
        const res= await fetch(`http://localhost:5000/updateblog/${id}`,{
            method:'PUT',
            headers:{'content-type':'application/json','token':token},
            body:JSON.stringify(newPost)
        })
        console.log(await res.json())
    }

  return (
    <>
         <div className="row">
        <div className="col-md-12">
        <div>
             <div className='container my-form'>
             <form className='blog-form'>
               <input className="form-control" type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" /><br/>
               <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder="Description" /><br/>
               <input className="form-control" type='text' value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Image Address'  /><br/>
               <input className="form-control" type='text' value={tag} onChange={(e)=>setTag(e.target.value)}  placeholder="Add Tags" /><br/>
               <button onClick={fetchTag}>Search tag</button>
              <div>{<div className='fetched-tags'>{mytags.map((item)=>{return <><div>{<><div className='blog-tags'>{item.tag}</div></>}<div className='tagbtn' onClick={myTag}>add</div> </div><br></br></>})}</div>}</div>
                 <div className='added-tags'>{fTag.map((item)=>{return <><div style={{margin:'5px'}} className='ad-tag'>{item}</div></>})}</div>
               <button onClick={editPost}>Edit post</button>
             </form>
             </div>
        </div> 
        </div>
      </div>
        
    </>
  )
}

export default Edit