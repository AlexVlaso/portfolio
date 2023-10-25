import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Spinner } from '../../components/spinner/spinner';
const Home = lazy(() => import('../home/home'));
const About = lazy(() => import('../about/about'));
const Contacts = lazy(() => import('../contacts/contacts'));
const Portfolio = lazy(() => import('../portfolio/portfolio'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/test" element={<Spinner />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
