import React,{useState,useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom'

const Form2 = () => {
 const [form,setForm]=useState({status:'',occup:'',date:''})
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
 useEffect(() => {
  if (Object.keys(formerrors).length === 0 && issubmit) {
    console.log(formerrors)
  }
}, [])
 const validate=(values)=>{
  const errors={}
  if(!values.status){
   errors.status='Select gender type!'
  }
  if(!values.occup){
   errors.occup='Enter occupation'
  }
  if(!values.date){
   errors.date='Select date of birth!'
  }
  if (Object.keys(errors) != 0) {
    return errors
  }
  else {
    return true
  }
 }
  return (
    <div className='container mt-5'>
        <pre>{JSON.stringify(formerrors)}</pre> 
<div className='row'>
<div className='col col-md-5'>
<div className='card'>
<h3 className='text-center'>LOGIN FORM</h3>
<div className='card-body'>
{
  (formerrors===true)?<Navigate to='/form3'/>:<>
  <form onSubmit={submithandler}>
 <div className="form-check form-check-inline">
 <input className="form-check-input" type="radio"  name='status' value='male' onChange={changehandler}/>
 <label className="form-check-label" >male</label>
</div>
<div className="form-check form-check-inline">
 <input className="form-check-input" type="radio" name='status' value='female' onChange={changehandler}/>
 <label className="form-check-label" >female</label>
</div> 
<p className='text-danger'>{formerrors.status}</p>
<div className='form-group mt-3'>
<input type='text' className='form-control' placeholder='Enter Occupation'name='occup' value={form.occup} onChange={changehandler}/>
<p className='text-danger'>{formerrors.occup}</p>
</div>
<div className='form-group'>
<input type='date' className='form-control' name='date' value={form.date}onChange={changehandler}/>
<p className='text-danger'>{formerrors.date}</p>
</div> 
<div className='d-md-flex align-items-center justify-content-between mt-4'>
<Link to='/form1'> <button type='button' className='btn btn-primary'>Previous</button></Link>
{/* <input type='submit' value='Next' className='btn btn-primary'/> */}
<button type='submit' className='btn btn-primary'>Next</button>
</div>
<div className="progress mt-3">
 <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="0">65%</div>
</div>

</form>
  </>
}

</div>
</div>
</div>
</div>
    </div>
  )
}

export default Form2