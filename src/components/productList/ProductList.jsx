import drillData from "../../data/drillData";
import ProductCard from "../productCard/ProductCard";
import React from 'react'

export default function ProductList() {
    const products = drillData.map(el => {
        <ProductCard key={el.name} image={el.image} name={el.name} price={el.price} description={el.description}/>
    })
  return (
    <div>
        {products}
    </div>
  )
}
