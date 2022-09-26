import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
	useEffect(() => {
		AOS.init({
			easing: "ease-in-out",
			duration: 1000,
			offset: 200,
			mirror: true,
			once: true,
		});
	}, []);
	return (
		<Routes>
			<Route exact path={"/:id"} element={<Home />} />
			<Route exact path={"/"} element={<Home />} />
		</Routes>
	);
}

export default App;
