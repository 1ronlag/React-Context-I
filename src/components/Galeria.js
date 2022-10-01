import "../assets/css/galeria.css";

import { useState, useContext } from "react";

import Context from "../my_context";
import Heart from "./Heart";

export default function Galeria() {
  const { photos, favorite, setFavorite } = useContext(Context);

  const [fav, setIsFavorite] = useState(false);

  const addToFavorite = (id) => {
    if (!favorite.includes(id)) {
      setFavorite(favorite.concat(id));
      setIsFavorite((current) => !current);
      console.log(id);
    } else {
      removeFavorite(id);
    }
  };

  const removeFavorite = (id) => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.map((photo, i) => (
        <div
          className="foto"
          style={{ backgroundImage: `url(${photo.src.medium})` }}
          onClick={() => addToFavorite(photo.id)}
        >
          <Heart filled={favorite.includes(photo.id) ? true : undefined} />
          <p> {photo.alt} </p>
        </div>
      ))}
    </div>
  );
}