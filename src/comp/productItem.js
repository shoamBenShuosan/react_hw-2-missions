import React from 'react'

export default function ProductItem(props) {
  const item = props.item;
  
    return (
    <div className='col-md-6 border p-2 p-3 mb-2 bg-info text-dark'>
        <h3> {item.name} </h3>
        <img src={item.image} />
        <div>
          category: {item.cat} 
        </div>
        <div> price:{item.price} </div>        
    </div>
  )
}
