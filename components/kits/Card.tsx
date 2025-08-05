import { useAppDispatch } from '@/store/Hooks'
import { Product } from '@/types'
import { Heart, ShoppingBag, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { addToCart } from '@/store/CardSlice'
import { addToFavorite } from '@/store/FaivoriteSlice'
import Link from 'next/link'
const Card = ({ category, id, price, title, image }: Product) => {
  const dispatch = useAppDispatch()
  return (
    <div className='w-full p-4 gap-2 flex justify-between items-center flex-col min-h-96 border  border-neutral-200 rounded-2xl'>
      <Image src={image} width={600} height={600} alt={title} className='w-full h-80  rounded-2xl object-cover' />
      <div className="w-full h-44  ">
        <h1 className='font-semibold'>{title} </h1>
        <div className="flex items-center gap-1">
          <p>{price} USD </p>
          <p className='underline opacity-25'>{price * 2} USD </p>


        </div>    
        </div>
        <div className="flex w-full gap-2 justify-between items-center">
         <Link href={`/products/${id}` } className='bg-store-500 flex justify-center items-center gap-2 text-white w-full h-12 rounded-md' >More</Link>
        <button onClick={() => dispatch(addToCart({ id, price, title, image }))} className=' bg-store-500 flex justify-center items-center gap-2 text-white w-14 h-12 rounded-md'>
          <ShoppingCart />
        </button>
        <button onClick={() => dispatch(addToFavorite({ id, price, title  , image}))} className='w-12 flex justify-center items-center h-12 border border-store-950/15 rounded-md '>
          <Heart />
        </button>
      </div>
    </div>
  )
}

export default Card