import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDash from "./components/AdminDash.tsx";
import RegistrationForm from "./components/RegistrationForm.tsx";
import RegistrationDetail from "./components/RegistrationDetail.tsx";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<RegistrationForm />} />
			<Route path="/admin" element={<AdminDash />} />
			<Route path="/registration/:id" element={<RegistrationDetail />} />
		</Routes>
	);
};

export default App;
