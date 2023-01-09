// Components import //
import Sidebar from './components/Sidebar/Sidebar';
import ResultPage from './components/ResultPage/ResultPage';

// Style import //
import './app.css';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <ResultPage />
    </div>
  );
};

export default App;
