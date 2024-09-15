

// import Footer from '@/components/footer/Footer'
// import Navbar from "@/components/Navbar/Navbar"

import Link from "next/link"

 
export default function DashboardLayout({ children }: { children: React.ReactNode}) {
  return (
    <>
      <nav>
        <Link href="/dashboard">Perfil</Link>
        <Link href="/dashboard/purchases">Compras</Link>
      </nav>     
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}