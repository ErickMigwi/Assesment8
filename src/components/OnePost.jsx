import React, {useState} from 'react'

function OnePost() {
    const [value, setValue] = useState(0)
    const [id, setId] = useState(0)
    let handleChange = (e)=>{
   setValue(e.target.value)
//    console.log(value);
    }
    let handleClick = ()=>{
    setId(value)
    console.log(id);
    }
  return (
    <div>
        <h1>Enter id:</h1>
        <label> Id:
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
      </label>
    </div>
  )
}

export default OnePost
