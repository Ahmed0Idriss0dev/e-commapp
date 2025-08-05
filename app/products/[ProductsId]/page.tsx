'use client'
import { Product } from '@/types';
import { getProductById, getProducts } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React, { use } from 'react'

const page = (  { params }: { params: Promise< { ProductsId: number }> }) => {
  const {ProductsId} = use(params)
        const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getProductById(ProductsId),
    queryKey: ["product" ], 
  });
  console.log(data)
  if(!data) {
    return (
        <></>
    )
  }
  const ProDuct:Product = data
const {image ,description ,id ,title ,price} = ProDuct
  return (
    <div className=' px-4 sm:px-50 md:px-80'>
        <div className="">
      <Image src={image} width={600} height={600}  alt={title} className='w-full h-full rounded-2xl object-cover' />
         <div className="grid py-2  w-full h-40 grid-cols-4 gap-2">
            <div className="w-full h-full bg-neutral-200 rounded-md"></div>
            <div className="w-full h-full bg-neutral-200 rounded-md"></div>
            <div className="w-full h-full bg-neutral-200 rounded-md"></div>

         </div>
         <div className="py-3">
            <h1 className='text-3xl font-semibold'>{title} </h1>
            <p>{description}  </p>
            <div className="flex items-center gap-1">
                            <p>{price} USD </p>
                            <p className='underline opacity-25'>{price * 2} USD </p>


            </div>
         </div>
            <button  className=' bg-store-950 flex justify-center items-center gap-2 text-white w-70 h-12 rounded-md'>
          <ShoppingCart/>
          <span>shop now</span>
        </button>  
        </div>
    </div>
  )
}

export default page