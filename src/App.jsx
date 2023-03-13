import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import HostDashboard from './pages/Host/Dashboard'
import HostIncome from './pages/Host/Income'
import HostReviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanDescription from './pages/Host/HostVanDescription'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhoto from './pages/Host/HostVanPhoto'
import Page404 from './pages/Page404'
import HostLayout from './components/HostLayout'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          
          <Route path='host' element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path='income' element={<HostIncome />}/>
            <Route path='reviews' element={<HostReviews />}/>
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />}>
              <Route index element={<HostVanDescription />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photo' element={<HostVanPhoto />} />
            </Route>
          </Route>

          <Route path='*' element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}