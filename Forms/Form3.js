import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Form3 = () => {
 const [form,setForm]=useState({number:'',address:'',city:'',state:''})
 const [formerrors,setFormerrors]=useState({})
 const [issubmit,setIssubmit]=useState(false)
 const changehandler=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }
 const submithandler=(e)=>{
  e.preventDefault()
  console.log(form)
  setFormerrors(validate(form))
  setIssubmit(true)
 }
 const validate=(values)=>{
  const errors={}
  if(!values.number){
   errors.number='Enter contact number!'
  }
  else if(values.number.length>10){
   errors.number='Mobile Number cannot be  more than 10 digit number'
  }
  else if(values.number.length<10){
   errors.number='Mobile Number must be 10 digit number'
  }
  if(!values.address){
   errors.address='Enter address!'
  }
  if(!values.city){
   errors.city='This field is required'
  }
  if(!values.state){
   errors.state='This field is required'
  }
  return errors
 }
 useEffect(() => {
 if(Object.keys(formerrors).length===0 && issubmit){
  console.log(formerrors)
 }
 }, [])
  return (
    <div className='container mt-5'>
    {Object.keys(formerrors).length===0 &&issubmit?<><h4>Sign in Successfully</h4></>:<pre>{JSON.stringify(formerrors)}</pre>}
<div className='row'>
<div className='col col-md-5'>
<div className='card'>
<h3 className='text-center'>LOGIN FORM</h3>
<div className='card-body'>
<form onSubmit={submithandler}>
 <div className='form-group'>
<input type='number' placeholder='Enter Mobile Number'className='form-control'name='number' value={form.number} onChange={changehandler}/>
<p className='text-danger'>{formerrors.number}</p>
 </div>
 <div className='form-group'>
 <input type='text' placeholder='Enter Your address'className='form-control'name='address' value={form.address} onChange={changehandler}/>
 <p className='text-danger'>{formerrors.address}</p>
 </div>
 <div className='form-group'>
 <input type='text' placeholder='Enter Your City'className='form-control'name='city' value={form.city} onChange={changehandler}/>
 <p className='text-danger'>{formerrors.city}</p>
 </div>
 <div className='form-group'>
 <input type='text' placeholder='Enter Your State'className='form-control'name='state' value={form.state} onChange={changehandler}/>
 <p className='text-danger'>{formerrors.state}</p>
 </div>
 <div className='d-md-flex align-items-center justify-content-between mt-4'>
<Link to='/form2'> <button type='button' className='btn btn-primary'>Previous</button></Link>
{/* <input type='submit' value='submit' className='btn btn-primary'/> */}
<button className='btn btn-primary' type='submit'>Submit</button>
 </div>
 <div class="progress mt-3">
  <div class="progress-bar" role="progressbar" style={{width: '100%'}} a0ria-valuenow="0" aria-valuemin="0" aria-valuemax="0">100%</div>
</div>
</form>
</div>
</div>

</div>
</div>
    </div>
  )
}

export default Form3