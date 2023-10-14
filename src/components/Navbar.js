import React from 'react';
import { Link ,NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div className='main'
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
               
            }}
        >
            <span  className="logo">E-commerce</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
              
                <NavLink className="cartCount" to="/cart"><FaShoppingCart /></NavLink>
            </div>
        </div>
    );
};

export default Navbar;
