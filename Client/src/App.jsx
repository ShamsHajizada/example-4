import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import NotFoundPage from "./Pages/NotFoundPage";
import AddProductPage from "./Pages/AddProductPage";
import DetailPage from "./Pages/DetailPage";
import HomePage from "./Pages/HomePage";
import Header from "./Layouts/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/products/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
