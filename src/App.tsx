import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { Footer } from './shared/components/Footer'
import { Navbar } from './shared/components/Navbar'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}
