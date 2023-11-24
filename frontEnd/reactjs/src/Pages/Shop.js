import React from 'react'
import ShopNav from '../component/ShopNav'

const Shop = () => {
  return (
    <div className='w-full h-[100vh]'>
      <ShopNav/>
      <div>
        <button>Paddy</button>
        <button>Corn</button>
        <button>Vegitables</button>
        <button>Fruits</button>
      </div>
    </div>
  )
}

export default Shop
