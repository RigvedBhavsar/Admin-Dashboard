import Navbar from './components/Navbar/Navbar';
import Sidenav from './components/Sidenav/Sidenav.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidenav/>
        <div className="others"></div>
      </div>
    </div>
  );
}

export default App;
