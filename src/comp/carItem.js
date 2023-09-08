import React from 'react'

export default function CarItem(props) {
  const item = props.item;
  
    return (
    <div className='col-md-6 border p-2 p-3 mb-2 bg-info text-dark'>
        <h3> {item.car} </h3>
        <div> model: {item.car_model} </div>
        <div> price:{item.price} </div>        
    </div>
  )
}
