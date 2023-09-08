import React, { useEffect, useState } from 'react'
import ProductItem from './productItem';

export default function Product() {
  
    const [productArr, setproductArr] = useState([]);

    useEffect (() => {
        doApi();
    }, [])

    const doApi = async () => {
        const url = "https://monkeys.co.il/api2/shop.php";
        const resp = await fetch(url);
        const data = await resp.json();
        setproductArr(data);
    }

    return (
    
    <div className= 'container'>
        <h2>List Products:</h2>
        <div className='row'>
            {productArr.map((item) => {
                return(
                    <ProductItem key={item.id} item={item} />
                )
            })}
        </div>
    </div>
    
  )
}
