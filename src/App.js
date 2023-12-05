import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Products from "./components/products/Products";
import Purchase from "./components/purchase/Purchase";
import Profile from "./components/profile/Profile";
import Protected from "./components/protected/Protected";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/products" element={<Products />} ></Route>
          <Route
            path="/profile"
            element={
              <Protected >
                <Profile />
              </Protected>
            }
          ></Route>
          <Route
            path="/purchase"
            element={
              <Protected >
                <Purchase />
              </Protected>
            }
          ></Route>
          <Route path="/*" element={<NotFound/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
