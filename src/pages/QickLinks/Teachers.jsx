import React from 'react'
import { Link } from 'react-router-dom'

const Teachers = () => {
  return (
<div className="general-pages">


    <div className="general-topbar">
      <div className="logo"><img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg" alt=""  className='image-logo'/></div>
<div className="personal-profile">
  <h5>Name:Ann Mwangi</h5>
  <h5>Emp No:0007</h5>
  <h5>Subjects:Chem/Maths</h5>
</div>
    </div>

    <div className="teachers-contents">
<div className="classes">
  <h4>classes</h4>
  <Link to='/form4east'>
    <h5>Form 4East :maths</h5>
  </Link>
  
  <h5>Form 3East:maths</h5>
  <h5>Form 3East:maths</h5>
</div>
<div className="announcemets">
  <p className='te'>Meeting at 10</p>
</div>
    </div>
    <div className="button btn">
      Upload assignments
    </div>
 </div> )
}

export default Teachers