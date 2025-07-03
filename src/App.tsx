
import { Outlet } from 'react-router'
import Navbar from './components/layout/Navbar'
import { Toaster } from './components/ui/sonner'


function App() {

  return (
    <>

      <Toaster richColors position="top-center" />
      <Navbar />
      <main className='max-w-7xl mx-auto'>
        <Outlet />
      </main>
    </>
  )
}

export default App
