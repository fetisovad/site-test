import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Apartment from "./pages/Apartment";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/apartment' element={<Apartment/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
