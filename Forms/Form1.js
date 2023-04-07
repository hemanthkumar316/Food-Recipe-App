import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
const Form1 = () => {
  const [formvalues, setFormvalues] = useState({ fname: '', lname: '', email: '' })
  const [formerrors, setFormerrors] = useState({})
  const [issubmit, setIssubmit] = useState(false)
  
const changehandler = (e) => {
    setFormvalues({ ...formvalues, [e.target.name]: e.target.value })
  }
  const submithandler = (e) => {
    e.preventDefault()
    console.log(formvalues)
    setFormerrors(validate(formvalues))
    setIssubmit(true)
  }
  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log(formerrors)
    }
  }, [])
  const validate = (values) => {
    const errors = {}
    const onlystrings = /^[A-Za-z\s]*$/
    const isemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
    if (!values.fname) {
      errors.fname = 'Enter first name!'
    }
    else if (!values.fname.match(onlystrings)) {
      errors.fname = 'Enter only alphabets'
    }
    if (!values.lname) {
      errors.lname = 'Enter last name!'
    }
    else if (!values.lname.match(onlystrings)) {
      errors.lname = 'Enter only alphabets'
    }
    if (!values.email) {
      errors.email = 'Enter email address!'
    }
    else if (!values.email.match(isemail)) {
      errors.email = 'This is not valid email format'
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

          <div className='card d-flex justify-content-center'>
            <h3 className='text-center'>LOGIN FORM</h3>
            <div className='card-body'>
            {
             (formerrors===true) ?<Navigate to="/form2"/>:<>

             <form onSubmit={submithandler}>
                <div className='form-group'>
                  <input type='text' placeholder='Enter first name' className='form-control' name='fname' value={formvalues.fname} onChange={changehandler} />
                  <p className='text-danger'>{formerrors.fname}</p>
                </div>
                <div className='form-group'>
                  <input type='text' placeholder='Enter last name' className='form-control' name='lname' value={formvalues.lname} onChange={changehandler} />
                  <p className='text-danger'>{formerrors.lname}</p>
                </div>
                <div className='form-group'>
                  <input type='text' placeholder='Enter email' className='form-control' name='email' value={formvalues.email} onChange={changehandler} />
                  <p className='text-danger'>{formerrors.email}</p>
                </div>
                <div>

                  <button className='btn btn-primary mb-3'>Next</button>
                      
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '30%' }} a0ria-valuenow="0" aria-valuemin="0" aria-valuemax="30">30%</div>
                  </div>
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

export default Form1