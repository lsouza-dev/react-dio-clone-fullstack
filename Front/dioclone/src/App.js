import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/";
import Login from "./pages/login";
import Register from './pages/register'
import Feed from './pages/feed'


function App() {
  return (
    <Router>
      <Routes>
          <Route path={""} element={<Home/>} />
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/register"} element={<Register/>} />
          <Route path={"/feed"} element={<Feed />}/>
      </Routes>
    </Router>
  );
}

export default App;
