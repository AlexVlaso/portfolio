import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Contacts } from '../contacts/contacts';
import { Portfolio } from '../portfolio/portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
