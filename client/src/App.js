import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Apartment from "./pages/Apartment";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./pages/NotFound";

function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/apartments/:id' element={<Apartment/>}/>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
