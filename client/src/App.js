import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Apartment from "./pages/Apartment";
import {useState} from "react";
import axios from "axios";

function App() {
    const [apartmentItem, setApartmentItem] = useState('')

    const handleAllInfo = async (id) => {
        await axios.get(`/api/apartments/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {id}
        })
            .then(res => {
                setApartmentItem(res.data)
            })
            .catch(e => console.log(e))
    }
    console.log(apartmentItem)

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={`/apartments/${apartmentItem.id}`} element={<Apartment apartmentItem={apartmentItem}/>}/>
                    <Route path='/' element={<MainPage setApartmentItem={setApartmentItem} handleAllInfo={handleAllInfo}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
