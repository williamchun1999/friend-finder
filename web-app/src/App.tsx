import './App.css'
import { AuthenticatedLayout } from './pages/home/authenticatedLayout';
// Holds Application routes (Landing, Home, Profile)
function App() {
  return (
    <AuthenticatedLayout />
  )
}

export default App