import "./styles/App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// page imports
import Home from "./pages/Home";
import News from "./pages/News";
import Events from "./pages/Events";
import Forums from "./pages/Forums";
import Profile from "./pages/Profile";
import Volunteer from "./pages/Volunteer";

// component imports
import Footer from "./components/Footer";
import CustomNav from "./components/CustomNav";

function App() {
	return (
		<>
			<Router>
				<CustomNav />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/news" element={<News />} />
					<Route path="/events" element={<Events />} />
					<Route path="/forum" element={<Forums />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/volunteer" element={<Volunteer />} />
				</Routes>
				<br></br>
				<br></br>

				<Footer />
			</Router>
		</>
	);
}

export default App;
