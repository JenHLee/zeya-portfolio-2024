import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="p-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <span className= "font-bold text-lg">Zeyaink</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <span className=" hover:text-gray-200">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className=" hover:text-gray-200">About</span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className=" hover:text-gray-200">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/Portfolio">
              <span className=" hover:text-gray-200">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className=" hover:text-gray-200">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
