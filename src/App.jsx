import './App.css';
import { Route, Routes } from 'react-router';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Event from './pages/Event/Event';
import Register from './pages/Register/Register';
import Participants from './pages/Participants/Participants';
import SignUp from './pages/SignUp/SignUp';
import User from './pages/User/User';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-events" element={<User />} />
        <Route path="/:id/participants" element={<Participants />} />
        <Route path="/register/:id" element={<Register />} />
        <Route path="/event-details/:id" element={<Event />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
