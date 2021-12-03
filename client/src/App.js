import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Apartment from "./pages/Apartment";
import NavBar from "./components/NavBar/NavBar";

function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/apartments/:id' element={<Apartment/>}/>
                    <Route path='/' element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
