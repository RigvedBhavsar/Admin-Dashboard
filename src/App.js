import Navbar from './components/Navbar/Navbar';
import Sidenav from './components/Sidenav/Sidenav.jsx';
import Home from './pages/Home/Home.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidenav/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
