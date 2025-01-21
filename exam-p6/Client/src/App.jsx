import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Dress from "./pages/Dress";
import WishList from "./pages/WishList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/dress" element={<Dress/>}/>
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
