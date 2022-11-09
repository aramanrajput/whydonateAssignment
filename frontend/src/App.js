import logo from './logo.svg';
import './App.css';


import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Search from './components/Search';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/search" element={<Search></Search>}></Route>
     </Routes>
    </div>
  );
}

export default App;
