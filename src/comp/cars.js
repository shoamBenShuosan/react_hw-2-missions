import React, { useEffect, useState } from 'react'
import CarItem from './carItem';

export default function Cars() {

    const [carArr, setcarArr] = useState([]);

    useEffect (() => {
        doApi();
    }, [])

    const doApi = async () => {
        const url = "https://myfakeapi.com/api/cars";
        const resp = await fetch(url);
        const data = await resp.json();
        const first15Cars = data.cars.slice(0, 15);
        setcarArr(first15Cars);
    }

  return (
    <div className= 'container'>
        <h2>List Cars:</h2>
        <div className='row '>
            {carArr.map((item) => {
                return(
                    <CarItem key={item.id} item={item} />
                )
            })}
        </div>
    </div>
  )
}
