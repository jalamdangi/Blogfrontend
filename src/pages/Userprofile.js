import React, { useEffect, useState } from 'react'

const Userprofile = () => {
  const [user,setUser]=useState([]);

  const [title,setTitle]=useState();
  const [description,setDescription]=useState();
  const [tag,setTag]=useState();
  const [image,setImage]=useState();
  const [fTag,setFtag]=useState([]);
  const [mytag,setMytag]=useState([]);
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
  setFtag(fTag=>[...fTag,tag]);
 //setFtag((tag)=>{return [setFtag(...tag)]})
  console.log(fTag)

}
const postBlog =async(e)=>{
  e.preventDefault();
  const post={title:title,description:description,tags:fTag}
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
               <input type='button' value='add' onClick={myTag} />
                 <div>{fTag.map((item)=>{return <>{item}</>})}</div>
               <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}  /><br/>
               <button onClick={postBlog}>Post Blog</button>
             </form>
        </div>
    </>
  )
}

export default Userprofile