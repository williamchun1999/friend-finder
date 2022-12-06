import './App.css'
import { NavBar } from '#components/nav-bar/nav_bar'
// Holds Application routes (Landing, Home, Profile)
function App() {
  return (
    <NavBar pageNames={['Profile', 'Settings', 'Log Out']}/>
  )
}

export default App