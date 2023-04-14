import React from 'react'

const RecipeItems = (props) => {
  const { name, image, ingredientLines, share, uri, url, calories, dietLabels, dishType } = props
  return (
    <>
<div className='container mt-5'>
<div className='row'>
<div className='card text-center'style={{border:'4px solid blue',}}>
<div className='card-body'>
<div className='row'>
<div className='col col-md-3 mt-5'>
<img src={image} alt={name} className='img-fluid rounded-pill' style={{border:'10px solid black',outline:'6px solid red'}}/>
<h2 className='card-label mt-2 text-danger'>{name}</h2>
</div>
<div className='col col-md-9'>
<h4 className='text-warning'> Calories :</h4>{calories}
                    {dietLabels.map(dietLabel => <span className=" list-type-none"> <h4 className='text-warning'>DietLabels : </h4> {dietLabel}</span>)}
       <h4 className='text-warning'>DishType : </h4>
                    {dishType}
                <h4 className='text-warning'>Ingredients: </h4>
                    {ingredientLines.map(ingredient => <div>{ingredient}</div>)}
                <h4 className='text-warning'>Cooking instructions: </h4><a href={url}>Process</a> 
                <h4 className='text-warning'>More details:</h4><a href={uri}>Edamam Website</a>
                <h4 className='text-warning'>Share: </h4><a href={share}>clich here share</a>
</div>
</div>

</div>
</div>


</div>
</div>
    </>
  )
}

export default RecipeItems