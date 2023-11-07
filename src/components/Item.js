import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContextt } from "../CartContextt";

const Item = (props) => {
    const [isAdding,setIsAdding]=useState(false)
    const { cart, setCart } = useContext(CartContextt);
    const { item } = props;

    const addToCart = (event, item) => {
        
        event.preventDefault();
        let _cart = { ...cart };
        if (!_cart.items) {
            _cart.items = {};
        }
        if (_cart.items[item.id]) {
            _cart.items[item.id] += 1;
        } else {
            _cart.items[item.id] = 1;
        }

        if(!_cart.items){
            _cart.totalitems=0;


        }
        _cart.totalitems += 1;
        setCart(_cart);
        setIsAdding(true)
        
         setTimeout(() => {
            setIsAdding(false)
         }, 1000);

        // Save the cart to local storage if needed
        window.localStorage.setItem('cart', JSON.stringify(_cart));
    };

    // Function to limit the length of the text
    const limitTextLength = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...'; // Truncate and add ellipsis
    };

    return (
        <Link to={`/items/${item.id}`}>
            <div>
                <img src={item.image} alt="" className="w-32 h-32" />
                <div>
                    <h2 className="text-lg font-bold py-2">
                        {limitTextLength(item.title, 43)} {/* Limit to 50 characters */}
                    </h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">☆4.5</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>₹{item.price}</span>
                    <button disabled={isAdding} onClick={(e) => { addToCart(e, item); }} className={`${ isAdding? 'bg-green-500':'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED':''}</button>
                </div>
            </div>
        </Link>
    );
};

export default Item;
