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
             <h1>Post Blog</h1>

             <form>
               <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="title" /><br/>
               <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder="description" /><br/>
               <input type='text' value={tag} onChange={(e)=>setTag(e.target.value)}  placeholder="add tags" /><br/>
               <button onClick={fetchTag}>Search tag</button>
              <div>{<div>{mytags.map((item)=>{return <><div>{item.tag}<div className='tagbtn' onClick={myTag}>add</div> </div><br></br></>})}</div>}</div>
                 <div>{fTag.map((item)=>{return <>{item}</>})}</div>
               <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}  /><br/>
               <button onClick={postBlog}>Post Blog</button>
             </form>
        </div>
       <Userblog /> 
    </>
  )
}

export default Userprofile