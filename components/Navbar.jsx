import React from 'react';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { AiOutlineShopping } from 'react-icons/ai';
import signin from '../pages/signin';

import { Cart } from './'
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">ZAHA</Link>
      </p>

      
      <div className='nav_left-side'>
        <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className='cart-item-qty'>{totalQuantities}</span>
        </button>

        {showCart && <Cart />}

        <Link href='/signin'>
          <a>Sign In</a>
        </Link>
      </div>

      
    </div>
  )
}

export default Navbar