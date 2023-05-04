import { RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  Navigate } from 'react-router-dom'
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
import useRegister from "./hooks/useRegister"
import useLogin from './hooks/useLogin'
import useVans from './hooks/useVans'
import useHostVans from './hooks/useHostVans'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'


export default function App() {
  const { user } = useContext(AuthContext)
  const { register } = useRegister()
  const { login } = useLogin()
  const { getVans } = useVans()
  const { getHostVans } = useHostVans()

  const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='login' 
    element={!user ? <Login /> : <Navigate to="/host"/>} 
    loader={loginMessageLoader} 
    action={({request}) => loginAction(request, login)} 
    />

    <Route path='register'
    element={!user ? <Register/> : <Navigate to="/host"/>}
    action={({request}) => registerAction(request, register)}
    />

    <Route path='vans' element={<Vans />} loader={() => VansLoader(getVans)} errorElement={<Error />}/>
    <Route path='vans/:id' element={<VanDetail />} loader={({params}) => VanDetailLoader(params, getVans)}/>
    
    <Route path='host' element={user ? <HostLayout /> : <Navigate to="/login?message=You must login first"/>}>
      <Route index element={<HostDashboard />}/>
      <Route path='income' element={<HostIncome />}/>
      <Route path='reviews' element={<HostReviews />}/>
      <Route path='vans' element={<HostVans />} loader={({request}) => HostVansLoader(request, getHostVans) }/>
      <Route path='vans/:id' element={<HostVanDetail />} loader={({params}) => HostVanDetailLoader(params, getHostVans) }>
        <Route index element={<HostVanDescription />}/>
        <Route path='pricing' element={<HostVanPricing />}/>
        <Route path='photo' element={<HostVanPhoto />}/>
      </Route>
    </Route>

    <Route path='*' element={<NotFound />}/>
  </Route>
))

  return (
    <RouterProvider router={router}/>
  )
}