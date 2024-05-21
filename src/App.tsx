import logo from './logo.svg';
import './App.css';
import './MainDisplay'
import MainDisplay from './MainDisplay';

function App() {
  return (
    <div className="App h-screen">
      <header className="App-header w-full h-1/2">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='flex flex-column flex-wrap content-start w-full h-screen'>
      <MainDisplay>
      </MainDisplay>
      </div>
    </div>
  );
}

export default App;
