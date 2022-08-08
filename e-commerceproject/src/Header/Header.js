import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div>
        <div className='container-fluid'>
          <div className='row'>          <div className='first col-4'>
            <p>Home</p>
            <p>Shopping</p>
            <p>Contact</p>

          </div>
          <div className='second col-6 p-3'>
<p className='signin p-2'>SignIn</p>
<p>SignUp</p>

          </div>
          </div>

        </div>
    </div>
  )
}

export default Header