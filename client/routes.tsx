import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import HomePage from './components/HomePage'
import FrogPage from './components/FrogPage'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<HomePage />} />
    <Route path="/frogs/:name" element={<FrogPage />} />
  </Route>
)
