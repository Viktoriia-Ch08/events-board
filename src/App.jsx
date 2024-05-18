import './App.css';
import { Route, Routes } from 'react-router';
// import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Event from './pages/Event/Event';
import Register from './pages/Register/Register';
import Participants from './pages/Participants/Participants';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/:id/participants" element={<Participants />} />
        <Route path="/register/:id" element={<Register />} />
        <Route path="/event-details/:id" element={<Event />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
