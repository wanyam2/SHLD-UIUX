import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home.jsx";
import FocusPage from "../src/pages/FocusPage/FocusPage.jsx";
import SeatManagement from "../src/pages/seatManagement/SeatManagement.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/focus" element={<FocusPage />} />
                <Route path="/myseat" element={<SeatManagement />} />
            </Routes>
        </Router>
    );
}

export default App;
