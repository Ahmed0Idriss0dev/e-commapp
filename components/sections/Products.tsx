'use client'
import React from 'react'
import Card from '../kits/Card'
import { useQuery } from "@tanstack/react-query";
import { getProducts } from '@/utils';
import { Product } from '@/types';
const Products = () => {
    const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getProducts(),
    queryKey: ["products"], //Array according to Documentation
  });
  if(isLoading){
    return (
        <h1>loading </h1>
    )
  }
  const Products:Product[] = data
  if(data){
    console.log(data)
  }
  return (
    <div className='grid p-4 grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4'>
      {Products.splice(1 , 4).map((data , id)=>(
          <Card key={id} {...data} />

      ))}



    </div>
  )
}

export default Products