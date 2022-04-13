import React, { useState } from 'react'

const AskQuestion = () => {
  const [question,setQuestion]=useState();
  const [tag,setTag]=useState();
  const [fTag,setFtag]=useState([]);
  const [mytags,setMytag]=useState([]);

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
const myTag=()=>{
  const newTag= mytags.map((item)=>item.tag)
    setFtag(fTag=>[...fTag,newTag[0]]);

}
const postQuestion= async (e)=>{
  e.preventDefault();
  const newQuestion={question:question,tags:fTag}
  const token=localStorage.getItem('token')
  const res=await fetch('http://localhost:5000/question',{
    method:'POST',
    headers:{'content-type':'application/json',token:token},
    body:JSON.stringify(newQuestion)
  })
  alert('your question is posted')
}
  return (
    <div>
      <h4 className='pt-4'>This is Ask Question Page..</h4>
      <div classNameName="container">
        <form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Write Your Question</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" value={question} onChange={(e)=>{setQuestion(e.target.value)}} rows="3"></textarea>
          </div>
          <div className="form-group">
            <label>Add Tags Here</label>
            <input type="text" value={tag} onChange={(e)=>{setTag(e.target.value)}} className="form-control" />
          </div>
          <button  className="btn btn-warning" onClick={fetchTag}>Search tag</button>
          <div>{<div className='fetched-tags'>{mytags.map((item)=>{return <><div>{<><div className='blog-tags'>{item.tag}</div></>}<div className='tagbtn' onClick={myTag}>add</div> </div><br></br></>})}</div>}</div>
                 <div className='added-tags'>{fTag.map((item)=>{return <><div className='ad-tag'>{item}</div></>})}</div>
          <button type="submit" onClick={postQuestion} className="btn btn-warning">Ask Question</button>
        </form>
      </div>
    </div>
  )
}

export default AskQuestion