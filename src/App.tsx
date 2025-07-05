
import { Outlet } from 'react-router'
import Navbar from './components/layout/Navbar'
import { Toaster } from './components/ui/sonner'
import Footer from './components/layout/Footer'


function App() {

  return (
    <>

      <Toaster richColors position="top-center" />
      <Navbar />
      <main className='max-w-7xl min-h-screen mx-auto bg-accent'>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
