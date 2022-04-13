import React, { useEffect,useState } from 'react'
import { useParams,NavLink } from 'react-router-dom'
import Answers from './Answers';

const Singlequestion = () => {
    const id=useParams();
    const [question,setQuestion]=useState([]);
    const [answer,setAnswer]=useState();
    const token=localStorage.getItem('token')
    useEffect(()=>{
        const getQuestion= async ()=>{
            const res = await fetch(`http://localhost:5000/fetchquestion/${id.id}`);
            const data= await res.json()
            setQuestion(data)
        }
        getQuestion()

    },[])
    const doAnwer= async ()=>{
        const answered={answer:answer}
        const res = await fetch(`http://localhost:5000/postanswer/${id.id}`,{
            method:'POST',
            headers:{'content-type':'application/json',token:token},
            body:JSON.stringify(answered)
        });
       alert('comment posted')
    }
  return (
    <div>Question
 <div className='container'>
        {question.map((item)=>{return <>
                      
                        <h3>{item.question} ?</h3>
                        <p>{item.tags.map((tag)=>{return(
                        <>
                            <NavLink to={`/fetchbytags/${tag}`} className="blog-tags">{tag}</NavLink>
                        </>
                        )})}</p>
        
        
        </>})}
     <Answers id={id.id} />
        <div class="form-group">
                        <label for="exampleFormControlTextarea1">Write your Answer here</label>
                        <textarea class="form-control" value={answer} onChange={(e)=>setAnswer(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                        {!localStorage.getItem('token')? <form className="d-flex">
            <NavLink className="btn btn-primary mx-2" style={{backgroundColor:"teal"}} to="/login" role="button">Login</NavLink>
        <NavLink className="btn btn-primary mx-2" style={{backgroundColor:"teal"}} to="/signup" role="button">Sign up</NavLink> 
      </form>: <button className="btn btn-primary" style={{backgroundColor:"teal"}} onClick={doAnwer}>Answer</button>}
                    </div>
        </div>
    </div>
  )
}

export default Singlequestion