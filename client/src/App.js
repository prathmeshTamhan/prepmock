
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import Login from './pages/Login'
import Register from './pages/Register'
import ChooseInterview from './pages/ChooseInterview'
import ChooseDomain from './pages/ChooseDomain'
import ChooseLevel from './pages/Chooselevel'
import Instructions from './pages/Instruction'
import StartTest from './pages/StartTest'
import MockInterview from './pages/MockInterview'
import VidHomePage from './components/HomePage/VidHomePage';

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={ <Register/>} />
          <Route exact path="/chooseInterview" element={ <ChooseInterview/>} />
          <Route exact path="/chooseDomain" element={ <ChooseDomain/>} />
          
          <Route exact path="/chooseLevel" element={ <ChooseLevel/>} />
          <Route exact path="/instructions" element={ <Instructions/>} />
          <Route exact path="/Start" element={ <StartTest/>} />
          <Route exact path="/Mockinterview" element={ <MockInterview/>} />
          <Route exact path="/VidHomePage" element={ <VidHomePage/>} />
        </Routes>
        {/* <MockInterview/> */}
    </>
  )
}

export default App;

