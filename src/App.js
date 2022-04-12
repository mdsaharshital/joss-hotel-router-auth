import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import Header from "./pages/Shared/Header/Header";
import Signup from "./pages/SignUp/Signup";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
