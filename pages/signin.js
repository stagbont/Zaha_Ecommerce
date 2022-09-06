import React from 'react'
import Link from 'next/link';
import { AiFillFacebook, AiFillGooglePlusSquare, AiFillLinkedin } from "react-icons/ai";

const Signin = () => {
  return (
    <div className='sign_container'>
      <form action='#'>
        <div className='left_side'>
          <div className='left-side-content'>
            <p>You Think You Know What African Culture Is? Test Yourself</p>
          </div>
        </div>
        <div className='right_side'>
          <legend>Sign In</legend>
          <div>
            <div className='inputfield'> 
              <div className='inputs'>
                <label>Username or Email</label>
                <input type="text" name="username" placeholder="username" />
              </div>

              <div className='inputs'>
                <label>Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>

              <div className='inputs fog'>
                forgot password?
              </div>
            </div>

            <div className='submit'>
              <Link href='/'><button type='submit'>Sign In</button></Link>
            </div>

            <div className='or'>or</div>

            <div className='social'>
              <span className='social-list'>
                <AiFillFacebook className='social-icon'/> Sign in with Facebook
              </span>

              <span className='social-list'>
                <AiFillGooglePlusSquare className='social-icon'/> Sign in with Google
              </span>

              <span className='social-list'>
                <AiFillLinkedin className='social-icon'/> Sign in with Linkedin
              </span>
            </div>

            <div className='signup'>
              Are you new? <Link href="/signup"><a>Sign Up</a></Link>
            </div>
          </div>
        </div>
      </form>
    </div>
);
}

export default Signin