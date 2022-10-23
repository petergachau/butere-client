import React from 'react'

function Activities(props) {
  return (
    <div className='schoolinfo'>
        <div className='schoolindividualinfo'>
        <p1 className="Titlesinfo">{props.title}</p1>
        <img src= {props.img}/>
        </div>
        </div>
  )
}

export default Activities