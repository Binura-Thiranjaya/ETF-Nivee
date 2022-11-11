import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './component/HomePage.jsx'
import Footer from './component/Footer.jsx'
import Page1 from './component/Page1.jsx'
import Page2 from './component/Page2.jsx'
import Page3 from './component/Page3.jsx'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
