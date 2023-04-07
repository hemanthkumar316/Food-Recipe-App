import React, { useState } from 'react'
import data from './data.json'
const Displaytable = () => {
 const [display, setDisplay] = useState(data)
 const [search,setSearch]=useState('')
 return (
  <>
   <div className='container mt-5'>
   <h2 className='text-center bg-primary mb-3 text-white'>LIST OF MATERIALS</h2>
   <div className='row'>
<div className='col'>
<form>
  <input type='search' value={search} onChange={(e)=>setSearch(e.target.value)} className='form-control-lg' placeholder='Search....'/>
</form>
</div>
   </div>
    <div className='row mt-3'>
     <div className='col mt-5'>
      <pre>{JSON.stringify(display)}</pre><br/>
      <table className='table table-hover mb-3'>
       <thead className='bg-dark text-white'>
        <tr>
         <th>S.NO</th>
         <th>NAME OF MATERIAL</th>
         <th>PRICE</th>
         <th>UOM</th>
         <th>QTY</th>
         <th>Total</th>
        </tr>
       </thead>
       <tbody>
        {
         display.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
          return (
            <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.uom}</td>
            <td>{item.qty}</td>
            <td>{item.price * item.qty}</td>
            </tr>
            
           )
         })
        }
       </tbody>
   </table>
   <h6 style={{'textAlign':'right'}}>Grant Total :{data.reduce((total, item)=>total+(item.price*item.qty),0)}</h6>
     </div>
    </div>
   </div>

  </>
 )
}

export default Displaytable