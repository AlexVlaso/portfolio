import { Header } from '../../components/header/header';
import { Testing } from '../../components/testing/testing';

function App() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Testing color="rgb(56, 24, 21)" />
        <Testing color="rgb(203, 165, 96)" />
        <Testing color="rgb(53, 55, 58)" />
        <Testing color="rgb(23, 24, 28)" />
      </div>
    </>
  );
}

export default App;
