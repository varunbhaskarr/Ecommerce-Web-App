import  { useContext, useEffect, useState } from 'react';
import { CartContextt } from '../CartContextt';

const Cart = () => {
  let total=0
  const { cart,setCart } = useContext(CartContextt);
  const [cartItems, setCartItems] = useState([]);

 
  

  useEffect(() => {
    if (cart && cart.items) {
      // Fetch cart items from the API
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((items) => {
          // Filter items that exist in the cart
          const itemsInCart = items.filter((item) => cart.items[item.id] > 0);
          setCartItems(itemsInCart);
          
        });
    }
  }, [cart]);

  const getqty=(itemid)=>{
    return cart.items[itemid]

  }




  const increment=(itemId)=>{
    const existingqty=cart.items[itemId]
    const _cart={...cart}
    _cart.items[itemId]=existingqty+1
    _cart.totalitems+=1
    setCart(_cart);
    setCartItems(cartItems.filter((item)=>item.id!==itemId))

  }

  const decrement=(itemId)=>{
    const existingqty=cart.items[itemId]
    if(existingqty===1){
      return;
    }
    const _cart={...cart}
    _cart.items[itemId]=existingqty-1
    _cart.totalitems-=1
    setCart(_cart);

  }
  const getsum=(itemid,price)=>{
    const sum=price*getqty(itemid)
    total +=sum
    return sum

  }
  const handleDelete=(itemid)=>{
    const _cart={...cart}
    const qty=_cart.items[itemid]
    delete _cart.items[itemid]
    _cart.totalitems=qty
    setCart(_cart)

  }




  return (
    cartItems.length?
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">Cart items</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="h-16" src={item.image} alt="image" />
                <span className="font-bold ml-4 w-48">{item.title}</span>
              </div>
              <div>
                <button onClick={()=>{decrement(item.id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                <b className="px-4">{cart.items[item.id]}</b>
                <button onClick={()=>{increment(item.id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
              </div>
              <span>Price: {getsum(item.id,item.price)}</span>
              <button
                className="bg-red-500 px-4 py-2 rounded-full leading-none text-white"
                onClick={() => {
                handleDelete(item.id)
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <hr className="my-6" />
      <div className="text-right">
        <b> grand Total</b>:{total}
      </div>
      <div className="text-right mt-6">
        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
          Order Now
        </button>
      </div>
    </div>
    :
    <img className='mx-auto w-1/2 mt-12 src="empty-cart.png' alt=""/>
  );
};

export default Cart;
