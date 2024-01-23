import { useEffect, useState } from "react";
import { api } from "../utils/axios";
import GalleryItem from "../src/components/GalleryItem";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    setLoading(true);
    const albums = await api.getAlbums();
    setList(albums);
    setLoading(false);
  };

  return (
    <div>
      {loading && "Carregando..."}

      {list.map((item, index) => (
        <GalleryItem key={index} id={item.id} title={item.title} />
      ))}
    </div>
  );
};
