import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import Login from './pages/Login'
import Register from './pages/Register'
import ChooseInterview from './pages/ChooseInterview'
import ChooseDomain from './pages/ChooseDomain'
import ChooseLevel from './pages/Chooselevel'
import Instructions from './pages/Instruction'
import StartTest from './pages/StartTest'
import MockInterview from './pages/MockInterview/MockInterview'
import Instruction from './pages/Instruction';
import VidHomePage from './components/HomePage/VidHomePage';
import CallPage from './components/CallPages/CallPage';
import No_Match from './components/NoMatch/No_Match';
import Feedback from './pages/Feedback';
import { setIsLogged } from './States/action-creators/index'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { acitionCreators } from './States/index'
import { useNavigate } from 'react-router-dom'

function App() {


  const dispatch = useDispatch()
  const { setIsLogged } = bindActionCreators(acitionCreators, dispatch)
  const navigate = useNavigate()

  const user = useSelector(state => state.User)
  console.log(user)

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/chooseInterview" element={<ChooseInterview />} />
        <Route exact path="/chooseDomain" element={<ChooseDomain />} />

        <Route exact path="/chooseLevel" element={<ChooseLevel />} />
        <Route exact path="/instructions" element={<Instructions />} />
        <Route exact path="/Start" element={<StartTest />} />
        <Route exact path="/Mockinterview" element={<MockInterview emailToSupport={user.userEmail} />} />
        <Route exact path="/instructions" element={<Instruction />} />
        <Route exact path="/feedback" element={<Feedback />} />
        
        <Route exact path="/videoConf/:id" element={<CallPage />} />
        <Route exact path="/videoConf" element={<VidHomePage />} />
        <Route path="*" element={<No_Match />} />

      </Routes>
      {/* <Feedback/> */}
    </>
  )
}

export default App;

