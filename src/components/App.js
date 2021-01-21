import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}

calculate(0, 0, '-');

export default App;
