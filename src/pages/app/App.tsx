import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../home/home';
import { About } from '../about/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
