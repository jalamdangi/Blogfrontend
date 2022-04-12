import React, { useEffect, useState } from 'react'
import Userblog from './Userblog';

const Userprofile = () => {
  const [user,setUser]=useState([]);

  const [title,setTitle]=useState();
  const [description,setDescription]=useState();
  const [tag,setTag]=useState();
  const [image,setImage]=useState();
  const [fTag,setFtag]=useState([]);
  const [mytags,setMytag]=useState([]);
  
 
  const token=localStorage.getItem('token');
  const getUser= async ()=>{
    const res= await fetch('http://localhost:5000/getuser',{
      method:'GET',
      headers:{'token':token,'content-type':'application/json'},
    });
    setUser(await res.json());
    console.log(user)
  }

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
const postBlog =async(e)=>{
  e.preventDefault();
  const post={title:title,description:description,tags:fTag,image:image}
  const response= await fetch('http://localhost:5000/postblog',
  { method:'POST',
  headers:{'token':token,'content-type':'application/json'},
  body:JSON.stringify(post)
})
console.log(await response.json());
alert('Your blog is posted')
}
  useEffect(()=>{getUser() },[token])
  
  return (
    <>
        <div>
            <h1>Welcome {user.map((item)=>item.name)}</h1>
            <h5>Username : {user.map((item)=>item.email)}</h5>
             <h1 className='post-blog-heading'>Post Blog</h1>
             <div className='container my-form'>
             <form className='blog-form'>
               <input className="form-control" type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="title" /><br/>
               <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder="description" /><br/>
               <input className="form-control" type='text' value={image} onChange={(e)=>setImage(e.target.value)} placeholder='image address'  /><br/>
               <input className="form-control" type='text' value={tag} onChange={(e)=>setTag(e.target.value)}  placeholder="add tags" /><br/>
               <button onClick={fetchTag}>Search tag</button>
              <div>{<div className='fetched-tags'>{mytags.map((item)=>{return <><div>{<><div className='blog-tags'>{item.tag}</div></>}<div className='tagbtn' onClick={myTag}>add</div> </div><br></br></>})}</div>}</div>
                 <div className='added-tags'>{fTag.map((item)=>{return <><div className='ad-tag'>{item}</div></>})}</div>
               <button onClick={postBlog}>Post Blog</button>
             </form>
             </div>
        </div>
       <Userblog /> 
    </>
  )
}

export default Userprofile