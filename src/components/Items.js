import Item from './Item'
import { useState,useEffect,useContext } from 'react'
import {CartContextt} from '../CartContextt'

const Items = () => {
//const{name}=useContext(CartContextt)
    const[items,setItems]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(items=>{
            console.log(items)
            setItems(items)
        })

    },[])
    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    items.map(item=><Item key={item.id} item={item}/> )
                    
                }
               


            </div>

        </div>

    )
}
export default Items
