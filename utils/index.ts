import { products } from "@/db"

const baseURl = 'https://fakestoreapi.com/products'
export async function getProducts(){
    try {
        // const res = await fetch(baseURl)
        // const data = await res.json()
        return products
    } catch (error) {
        console.log(error)
    }
 }