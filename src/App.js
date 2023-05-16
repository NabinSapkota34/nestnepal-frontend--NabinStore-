
import Products from './routes/Product';
import Home from './routes/Home';
import About from './routes/AboutUs';
// import Menu from './routes/Menu';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Aboutus from './components/Aboutus';
function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Home  />} />
     <Route path="/product" element={<Products  />} />

         <Route path="/aboutus" element={<Aboutus  />} />
        {/* <Route path="/menu" element={<Menu  />} /> */} 
      </Routes>
        </Router>
    </>
  );
}

export default App;
