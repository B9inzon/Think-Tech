

// import Footer from '@/components/footer/Footer'

import Navbar from "@/components/Navbar/Navbar"

 
export default function DashboardLayout({ children }: { children: React.ReactNode}) {
  return (
    <>
      <Navbar/>     
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}