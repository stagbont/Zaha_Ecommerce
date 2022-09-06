import React from 'react'
import Link from 'next/link';
import { AiFillFacebook, AiFillGooglePlusSquare, AiFillLinkedin } from "react-icons/ai";

const Signout = () => {
  return (
    <div className='sign_container'>
      <form action='#'>
        <div className='left_side'>
          <div className='left-side-content'>
            <p>You Think You Know What African Culture Is? Test Yourself</p>
          </div>
        </div>
        <div className='right_side'>
          <legend>Sign Up</legend>
          <div>
            <div className='inputfield'> 
              <div className='inputs'>
                <label>Email</label>
                <input type="email" name="email" placeholder="email" required/>
              </div>

              <div className='inputs'>
                <label>Username or Email</label>
                <input type="text" name="username" placeholder="username" required/>
              </div>

              <div className='inputs'>
                <label>Password</label>
                <input type="password" name="password" placeholder="password" required/>
              </div>

              <div className='inputs'>
                <label>Repeat Password</label>
                <input type="password" name="r-password" placeholder="repeat password" required/>
              </div>
            </div>

            <div className='submit'>
              <Link href='/'><button type='submit'>Sign Up</button></Link>
            </div>

            <div className='or'>or</div>

            <div className='social'>
              <span className='social-list'>
                <AiFillFacebook className='social-icon'/> Sign up with Facebook
              </span>

              <span className='social-list'>
                <AiFillGooglePlusSquare className='social-icon'/> Sign up with Google
              </span>

              <span className='social-list'>
                <AiFillLinkedin className='social-icon'/> Sign up with Linkedin
              </span>
            </div>

            <div className='signup'>
              You have an account? <Link href="/signin"><a>Sign In</a></Link>
            </div>
          </div>
        </div>
      </form>
    </div>
);
}

export default Signout