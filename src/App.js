
import './App.css';
import Home from './pages/Home';
import { Route, BrowserRouter, Routes } from "react-router-dom"
import './stylesheets/layout.css';
import './stylesheets/home.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
