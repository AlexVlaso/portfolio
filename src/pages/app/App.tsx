import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Contacts } from '../contacts/contacts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
