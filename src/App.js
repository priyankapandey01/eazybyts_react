import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Profile from './components/Authentication/Profile';
import CreateAppointment from './components/Appointments/CreateAppointment';
import AppointmentList from './components/Appointments/AppointmentList';
import AdminPanel from './components/Admin/AdminPanel';
import './App.css'
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create_appointment" element={<CreateAppointment />} />
                <Route path="/appointment_list" element={<AppointmentList />} />
                <Route path="/admin_panel" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}

export default App;
