import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import UserAuth from './Pages/UserAuth';
import MainHome from './Pages/MainHome';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/home"  element={<MainHome/>}/>
        <Route path="/auth"  element={<UserAuth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
