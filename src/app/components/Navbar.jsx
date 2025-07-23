import React from 'react';

const Navbar = () => {
    return (
        <div>
             <nav className='flex justify-center'>
         <ul className='flex justify-between'>
           <li>home</li>
          <li>about</li>
          <li className=''>services</li>
          <li>blog</li>
         </ul>
        </nav>
        </div>
    );
};

export default Navbar;