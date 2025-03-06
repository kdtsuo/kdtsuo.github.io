
import './App.css';
import About from './components/About.js';
import Activities from './components/Activites.js';
import Navbar from './components/Navbar';
import NavbarPanel from './components/NavbarPanel';
import QuickLinks from './components/QuickLinks.js';
import { useNavbar } from './Main.js';
import Positions from './components/Positions.js';
import Contacts from './components/Contacts.js';
import Copyright from './components/Copyright.js';
import Sponsors from './components/Sponsors.js';
import Farewell from './components/Farewell.js';
import { useEffect } from 'react';

function App() {
  const { isPanelOpen, togglePanel } = useNavbar();

  // redirect to v3
  useEffect(() => {
    window.location.replace('https://kdtsuo.vercel.app/');
  }, [])

  return (
    <div className='App'>

      <Navbar isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
      <NavbarPanel isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
      <QuickLinks />
      <About />
      <Activities />
      <Positions />
      <Sponsors />
      <Contacts />
      <Farewell />
      <Copyright />
    </div>
  );
}

export default App;
