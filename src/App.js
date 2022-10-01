import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useState, useEffect } from "react";
import Context from "./my_context";
import axios from "axios";

export default function App() {
  const endpoint = "/fotos.json";
  const [photos, setPhotos] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const globalState = { photos, setPhotos, favorite, setFavorite };

  useEffect(() => {
    axios
      .get(endpoint)
      .then((result) => {
        console.log(result.data.photos);
        setPhotos(result.data.photos);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}