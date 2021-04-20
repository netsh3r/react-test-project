import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header  />
        <Main  />
      </div>
    </div>
  );
}

export default App;
