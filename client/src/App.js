import Header from "./components/Header";
import Feature from "./components/Feature.jsx";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChooseInterview from "./pages/ChooseInterview";
import ChooseDomain from "./pages/ChooseDomain";
import Chooselevel from "./pages/Chooselevel"
import Start from "./pages/Start";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
