
import { useContext } from "react";

import Context from "../my_context";

export default function Favoritos() {
  const { photos, favorite } = useContext(Context);
  let favorites = photos.filter((photo) => favorite.includes(photo.id));

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4 ">
        {favorites.map((photo, x) => (
          <div
            className="foto"
            style={{ backgroundImage: `url(${photo.src.medium})` }}
          ></div>
        ))}

      </div>
    </div>
  );
}
