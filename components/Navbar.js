import React from 'react'
import Link from 'next/link'
//Navbar done;
const Navbar = () => {
    return (
        <nav className='h-12 bg-purple-700 flex justify-between px-3 items-center text-white'>
            <div className='logo font-bold text-lg'>
                <Link href='/'>Shrinkr</Link>
            </div>
            <ul className='flex justify-center gap-4 items-center px-2'>
                <Link href='/'><li>Home</li></Link>
                {/* <Link href='/about'><li>About</li></Link> */}
                <Link href='/shorten'><li>Shorten</li></Link>
                {/* <Link href='/contact'><li>Contact Us</li></Link> */}
                {/* <li className='flex gap-3'>
                    <Link href='/generate'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                    <Link href='/generate'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navbar