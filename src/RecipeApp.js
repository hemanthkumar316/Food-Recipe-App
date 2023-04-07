import axios from 'axios'
import React,{useEffect, useState} from 'react'
import RecipeItems from './RecipeItems'

const ReciepeApp = () => {
 const [search,setSearch]=useState('pizza')
 const [recipe,setRecipe]=useState([])
 const APP_ID="2c5b837a"
 const APP_KEY ="9ce06ed6cfc3d9abb7a6a0b2adb508c3"

 useEffect(()=>{
  getRecipe()
 },[])
 const getRecipe= async()=>{
const response=await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
// console.log(response.data.hits)
setRecipe(response.data.hits)
 }
const searchRecipe=()=>{
 getRecipe()
}
  return (
    <>
    <pre>{JSON.stringify(recipe)}</pre>
   <div className="jumbotron jumbotron-fluid bg-danger p-5 mt-4 ">
  <div className="container text-center">
    <h1 className="display-6 text-white mt-5 mb-3">FOOD RECIPE APP</h1>

    <input type='text' className='form-control-lg mb-2' placeholder='Search reciepe....' value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
    <button className='btn btn-warning text-white mt-4 btn-lg btn-outline-dark' onClick={searchRecipe}>Search Recipe</button>
  </div>
</div>

<div>
 { recipe.map((rec)=>{
  return <RecipeItems 
       name={rec.recipe.label}
                share={rec.recipe.shareAs}
                uri={rec.recipe.uri}
                url ={rec.recipe.url}
                image={rec.recipe.image}
                ingredientLines={rec.recipe.ingredientLines}
                calories={rec.recipe.calories}
                dietLabels={rec.recipe.dietLabels}
                dishType={rec.recipe.dishType}
    />
 })}

</div>
    </>
  )
}

export default ReciepeApp