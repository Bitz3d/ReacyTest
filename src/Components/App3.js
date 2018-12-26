import React from 'react'
import productList from '../utils/productData'
import Product from './Product'

function App3(){
    const productData = productList.map(product => <Product key={product.id} name={product.name} quantity={product.quantity} price={product.price} />)

    return(
        <div>
            {productData}
        </div>
    )
    }

export default App3