import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from "react-router-dom";



const SingleProducts = () => {
  const navigate = useNavigate();

  const params=useParams()
  const[item,setItem]=useState({})
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${params._id}`)
    .then(res=>res.json())
    .then(item=>{
      setItem(item)
    })

  },[params.id])
  


  return (
    <>
    <practice/>
      <div className="container mx-auto mt-12">
        <button className="mb-12 font-bold" onClick={() => navigate(-1)}>Back</button>
        <div className="flex ">
          <img src={item.image} alt="item" className="h-24 w-24" />
          <div className="ml-16">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <div className="text-md">4.5</div>
            <div className="font-bold mt-2">{item.price}</div>
            <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProducts;
