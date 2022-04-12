import React, { useEffect, useState } from 'react'

const Question = () => {
    const [question,setQuestion]=useState([]);
    
    const fetchQuestion= async()=>{
        const res= await fetch('http://localhost:5000/fetchquestion');
        setQuestion(await res.json())
        console.log(question)
    }
    useEffect(()=>{fetchQuestion()},[])
  return (
    <div>{question.map((item)=>{return <>
    <p>{item.question}</p>
    </>})}</div>
  )
}

export default Question