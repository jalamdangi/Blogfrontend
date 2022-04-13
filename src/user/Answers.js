import React, { useEffect, useState } from 'react'

const Answers = (props) => {
    const [answer,setAnswer]=useState([]);
    const [myAnswer,setMyAnswer]=useState();

    const fetchAnwer=async ()=>{
        const res= await fetch(`http://localhost:5000/fetchanswer/${props.id}`)
        const data= await res.json()
        setAnswer(data)
        if(answer.answer===[]){setMyAnswer('No  answers yet')}
        else{
        setMyAnswer(answer.user.map((item)=>{return <><h5>{item.name}</h5>
                       
        {answer.answer.map((it)=>{return <><p>{item._id===it.user_id?it.answer:''}</p></>})}</>}))
        
     }
    }
   // useEffect(()=>{fetchAnwer()},[])
    
  return (
    <div>
        <button onClick={fetchAnwer} >See Answers</button>
        {myAnswer}
    </div>
  )
}

export default Answers