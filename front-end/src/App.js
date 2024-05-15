import logo from './logo.svg';
import './App.css';

// IMPORT COMPONENTS
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import HotelIndex from "./pages/HotelIndex";
import HotelShow from "./pages/HotelShow";



function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "http://localhost:4000/";


  return (
    <div className="App">
      {/* //<Header /> */}
      <Routes>

        <Route exact path="/hotels" element={<HotelIndex URL={URL}/>}/>
        <Route exact path="/hotels/:id" element={<HotelShow URL={URL} />}/>
     

      </Routes>

      {/* <Footer /> */}

    </div>
  );
}

export default App;