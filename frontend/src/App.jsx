import { RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans, {loader as VansLoader } from './pages/Vans/Vans'
import VanDetail, {loader as VanDetailLoader } from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import HostDashboard from './pages/Host/Dashboard'
import HostIncome from './pages/Host/Income'
import HostReviews from './pages/Host/Reviews'
import HostVans, {loader as HostVansLoader} from './pages/Host/HostVans'
import HostVanDetail, {loader as HostVanDetailLoader} from './pages/Host/HostVanDetail'
import HostVanDescription from './pages/Host/HostVanDescription'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhoto from './pages/Host/HostVanPhoto'
import NotFound from './pages/NotFound'
import HostLayout from './components/HostLayout'
import Error from './components/Error'
import Login, {loader as loginMessageLoader, action as loginAction} from './pages/Login'
import Register, {action as registerAction} from './pages/Register'
import { requireAuth } from './utils'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='login' 
    element={<Login />} 
    loader={loginMessageLoader} 
    action={loginAction} 
    />

    <Route path='register'
    element={<Register/>}
    action={registerAction}
    />

    <Route path='vans' element={<Vans />} loader={VansLoader} errorElement={<Error />}/>
    <Route path='vans/:id' element={<VanDetail />} loader={VanDetailLoader}/>
    
    <Route path='host' element={<HostLayout />}>
      <Route index element={<HostDashboard />} loader={async  ({request}) => await requireAuth(request)}/>
      <Route path='income' element={<HostIncome />} loader={async  ({request}) => await requireAuth(request)}/>
      <Route path='reviews' element={<HostReviews />} loader={async  ({request}) => await requireAuth(request)}/>
      <Route path='vans' element={<HostVans />} loader={ HostVansLoader }/>
      <Route path='vans/:id' element={<HostVanDetail />} loader={ HostVanDetailLoader }>
        <Route index element={<HostVanDescription />}/>
        <Route path='pricing' element={<HostVanPricing />}/>
        <Route path='photo' element={<HostVanPhoto />}/>
      </Route>
    </Route>

    <Route path='*' element={<NotFound />}/>
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}