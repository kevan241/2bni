import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './composants/navbar';
import Homepage from './composants/pages/homepage';
import About from './composants/pages/about';
import Assurances from './composants/pages/assurances';
import Footer from './composants/footer';
import Petrole from './composants/pages/petrole';
import EnergyVerte from './composants/pages/energy_verte';
import Industries from './composants/pages/industries';
import Schedule from './composants/schedule';
import Carriere from './composants/carriere';
import Contact from './composants/contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/assurances" element={<Assurances />} />
          <Route path="/petrole" element={<Petrole />} />
          <Route path="/energy_verte" element={<EnergyVerte />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/carriere" element={<Carriere />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
