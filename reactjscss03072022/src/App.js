
import './App.css';
import Navbar from './components/NavBar';
import Homepage from './components/Homepage';
import Saturday from './pages/Saturday';
import Sunday from './pages/Sunday';
import Special from './pages/Special';
import Footer from './components/Footer';


//Router DOM
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navbar />}>
        <Route path="/" element={ <Homepage />}/>
        <Route path="/Homepage" element={ <Homepage />}/>
        <Route path="Saturday" element={<Saturday />}/>
        <Route path="Sunday" element={ <Sunday />} />
        <Route path="Special" element={ <Special />} />
        <Route path="Footer" element={ <Footer />} />


        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
 

    </>
  );
}

export default App;