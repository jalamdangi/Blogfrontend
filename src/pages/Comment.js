import{ React,useEffect,useState} from 'react'

const Comment = (props) => {
    const [blogComment,setBlogComment]=useState(['no comments yet']);
    const [myComment,setMycomment]=useState('');
    
    const fetchComment = async()=>{
        const res= await fetch(`http://localhost:5000/fetchcomments/${props.id}`);
        setBlogComment(await res.json());
       if(blogComment.comment===[]){setMycomment('No comments yet')}
       else{
       setMycomment(blogComment.user.map((item)=>{return <><h5>{item.name}</h5>
                      
       {blogComment.comment.map((it)=>{return <><p>{item._id===it.user_id?it.comment:''}</p></>})}</>}))
       
    }}


    useEffect(()=>{fetch(`http://localhost:5000/fetchcomments/${props.id}`)
    .then((res)=>res.json())
    .then((result)=>setBlogComment(result))
   console.log(blogComment)
},[])
  return (
    <div>
        <button onClick={fetchComment}>See comments</button>
        <div>
                      {myComment}
                      
                      
                  </div>
    </div>
  )
}

export default Comment