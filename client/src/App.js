import './App.css';
import Home from './components/home';
import Nav from './components/Nav';

import Routes from './routes';


function App() {
  return (
    <>
    <Routes>
    <Nav />
    <Home />
    </Routes>
    </>
  );
}

export default App;
