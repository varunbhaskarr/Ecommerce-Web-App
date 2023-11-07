import {Link} from 'react-router-dom'
import {useContext} from 'react'
import { CartContextt } from '../CartContextt'
const Navigation=()=>{
    const cartstyle={
        background:'#fcbe03',
        display:'flex',
        padding : '6px 12px',
        borderRadius:'50px'
    }
    const{cart}=useContext(CartContextt)
    
    return(
        <>
        <nav className='container mx-auto flex items-center justify-between py-4'>
            
                <Link to='/'>
                    <img style={{ height:45 }} src='/imges/image1.jpg' alt='logo'/>
                </Link>
                <ul className="flex items-center">
                    <li><Link to='/'>Home</Link></li>
                    <li className="ml-4"><Link to="/items">Products</Link></li>
                    <li className="ml-4">
                        <Link to='/cart'>
                           <div style={cartstyle}>
                            <span>{cart.totalitems}</span>
                            <img className='ml-2' src="/imges/cart.png" alt="cart-icon"/>
                           </div>
                        </Link>
                    </li>

                </ul>
           

        </nav>
        
        </>
        
    )
}
export default Navigation