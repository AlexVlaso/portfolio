import { Testing } from '../../components/testing/testing';

function App() {
  return (
    <>
      <h1>Title </h1>
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
