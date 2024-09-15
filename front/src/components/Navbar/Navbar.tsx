import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav>
        <Link href="/dashboard">Profile</Link>
        <Link href="/dashboard/purchases">Purchases</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </div>
  )
}

export default Navbar