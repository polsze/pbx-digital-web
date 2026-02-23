import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from '../shared/FloatingWhatsApp' 
import useScrollToTop from '../../hooks/useScrollToTop'

const Layout = () => {
  useScrollToTop()
  
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default Layout