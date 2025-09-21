
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css'
import React from 'react'

styles.card 

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text xl hover:bg-sky-600 rounded-lg shadow-lg flex flex-col justify-between  '>
        <AddToCart />
    </div>
  )
}

export default ProductCard
