import React, { useState } from 'react'
import data from'./data'
const Damb = () => {
    const [people, setPeople] = useState(data);

    const[index,setIndex]=useState(0)
  return (
    <div className='section-center'>
        {people.map((data)=>{
            const{name,image,title,quote}=data
            return(
                <>
                 {title}
                {name} 
                {quote}<button onClick={(e)=>setIndex(index+1)} >
                t
               </button>
                <img src={image} alt="" />
               
               
                </>
            )
        })}
    </div>
  )
}

export default Damb