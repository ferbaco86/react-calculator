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

const data = {
  total: 0,
  next: 0,
  operation: '',
};
calculate(data, '-');

export default App;
