'use client'
import React, { useState } from 'react'

const page = () => {
  // variable
  const [title, settitle] = useState('')
  const [disc, setdisc] = useState('')
  const [maintask, setmaintask] = useState([])
  const submithandler=(elem)=>{
    elem.preventDefault() // its use for stop submited form 
    setmaintask([...maintask,{title,disc}]);
    console.log(maintask);
    settitle("")
    setdisc("")
  }

  const detetehandler = (i)=>{
    let  copytask = [...maintask]
    copytask.splice(i,1);
    setmaintask(copytask);
  }
  // /let rendertext = <div className='res'></div>
         let rendertext = <h2 className='default'>No Task Available</h2>

 if(maintask.length>0){
  rendertext = maintask.map((elem,i) => {
    return(
      <li key={i}>
        <div className='outer'>
          <h5>{elem.title}</h5>
          <h6>{elem.disc}</h6>
          <button className='del-btn' 
          onClick={ ()=>{
            detetehandler(i);
          }}>Delete</button>
        </div>
      </li>
    )
  })
 };
  return (
    // fragments  => <></>
    <>
    <h1 className='bg-black text-white p-5 text-5xl text-center font-bold'>MOUMIN AHMAD</h1>
    <form onSubmit={submithandler}>
      <input type='text' placeholder='Enter Task here' value={title}
      onChange={(elem)=>{
        settitle(elem.target.value)
      }}
      ></input>
      <input type='text' placeholder='Enter Discription here' value={disc}
      onChange={(elem)=>{
        setdisc(elem.target.value)
      }}></input>
      <button>Add Task</button>
    </form>
    <hr/>
    <div className='res'>
      <ul>
      {rendertext}
      </ul>
    </div>
    </>
  )
}

export default page