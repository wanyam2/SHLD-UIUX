import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home.jsx";
import FocusPage from "../src/pages/FocusPage/FocusPage.jsx";
import SeatManagement from "./pages/SeatManagement/SeatManagement.jsx";
import SeatLayout from "./pages/SeatLayout/SeatLayout.jsx";
import ReportPage from "./pages/ReportPage/ReportPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/focus" element={<FocusPage />} />
                <Route path="/myseat" element={<SeatManagement />} />
                <Route path="/ground" element={<SeatLayout />} />
                <Route path="/report" element={<ReportPage />} />
            </Routes>
        </Router>
    );
}

export default App;
