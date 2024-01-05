import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Home } from "./pages";

const App = () =>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>

    </BrowserRouter>
  )


export default App;