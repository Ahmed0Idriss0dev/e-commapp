
const baseURl = '/api'
export async function getProducts(){
    try {
        const res = await fetch(baseURl)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
 }
 export async function getProductById(id:number){
    try {
        const res = await fetch(`${baseURl}/${id}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
 }