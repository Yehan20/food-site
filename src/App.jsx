import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Foods from "./components/Foods";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleFood from "./pages/SingleFood";
import 'aos/dist/aos.css'
import Aos from "aos";
import Error from "./pages/Error";
function App() {
  useEffect(()=>{
     Aos.init()
  })
 
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/foods" element={<Foods/>}/>
       <Route path="/foods/food/:id" element={<SingleFood/>}/>
       <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;