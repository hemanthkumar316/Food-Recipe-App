import axios from 'axios'
import React,{useState,useEffect} from 'react'


const Data = () => {
  const [fetch,setFetch]=useState([])
  const [search,setSearch]=useState('')
  useEffect(() => {
 
  axios.get('https://rickandmortyapi.com/api/character')
  .then(response=>response.data)
  .then(data=>setFetch(data.results))
  }, [])
  return (
    <div className='container-fluid  bg-info text-danger'>
<pre className='text-white'>{JSON.stringify(fetch)}</pre>
<div className='form-group text-center'>
<input type='search' value={search} onChange={(e)=>setSearch(e.target.value)}placeholder='search...' className='form-control-lg rounded-circle" '/>
</div>
<div className='row'>
{
  fetch.filter(index=>index.name.toLowerCase().includes(search.toLowerCase())).map((index)=>{
    return(
      <div className='col-12 col-md-3 d-flex justify-content-center'>
      <div className='card  text-center mb-4' style={{width:'200px'}}>
      <div className='card-header bg-dark'>
      <img src={index.image} width='80%' height='100%' className='rounded-9'/>
      </div>
      <div className='card-body'>
<h5 className='card-text bg-primary text-warning'>{index.name}</h5>
<p className='bg-danger text-white'>{index.gender}</p>
<button className='btn btn-block btn-warning text-primary'>{index.species}</button>
      </div>
      </div>
      </div>
    )
  })
}
</div>
    </div>
  )
}

export default Data