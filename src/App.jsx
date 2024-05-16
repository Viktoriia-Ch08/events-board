import "./App.css";
import { Route, Routes } from "react-router";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchEvents } from "./redux/events/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
