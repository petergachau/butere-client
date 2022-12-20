import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import FileBase from "react-file-base64";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createVacation } from '../../redux/features/vacation';
import { createMilestone } from '../../redux/features/mileSlice';
import { createTenant } from '../../redux/features/TenantSlice';
import { createCaretakerVacation } from '../../redux/features/caretakerVacation';
const News = () => {
  const [form,setForm]=useState({
title:'',
desc:'',
time:''
  })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [tours,setTours]=useState([])

  const { user } = useSelector((state) => ({ ...state.auth }));


  const handleSubmit=(e)=>{
    e.preventDefault()
    e.target.reset();
         if (form){
          const updateddata={...form}
         if(!id){
          dispatch(createCaretakerVacation(updateddata,toast))
          // navigate('/student')
         }
         
         
         }
  }


  const {id}=useParams()
  
  return (
    <Form onSubmit={handleSubmit} className=''>
      <div className="main-tender-sec">

      <div className="general-form">
        <div className="n">
    <Form.Group className="mb-3">
     
      <Form.Label>News</Form.Label>
      <Form.Control style={{width:'18rem'}} onChange={(e)=>setForm({...form,title:e.target.value})} className='input'  type="text" placeholder="News title" />
     
    </Form.Group>
</div>
<div className="n">
    <Form.Group className="mb-3"  >
      <Form.Label>News description </Form.Label>
      <Form.Control className='input' style={{width:'18rem'}} onChange={(e)=>setForm({...form,desc:e.target.value})} type="text" placeholder="News description " />
     
    </Form.Group>

    </div>
    <div className="n">
    <Form.Group className="mb-3"  >
      <Form.Label>Event Date </Form.Label>
      <Form.Control className='input' style={{width:'18rem'}} onChange={(e)=>setForm({...form,time:e.target.value})} type="date" placeholder="event time " />
     
    </Form.Group>
    </div>
    <div className="n">
    <p>Events Photo</p>
      <FileBase
              type="file"
              placeholder='mpesa screenshot'
              multiple={false}
              onDone={({ base64 }) =>
                setForm({ ...form, imageFile: base64 })
              }
            /></div>
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
   < Button variant="primary" type="submit">
      Submit
    </Button>
    </div>
    </div>
  </Form>
  )
}

export default News