import { useEffect, useState } from "react";
import { api } from "../utils/axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Photo = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    if (params.id) {
      loadPhoto(params.id);
      console.log({ photo });
    }
  }, []);

  const loadPhoto = async (id) => {
    setLoading(true);
    const photo = await api.getPhoto(id);
    setPhoto(photo);
    setLoading(false);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBackButton}>Voltar</button>

      {loading && "Carregando..."}

      <h1>{photo.title}</h1>
      <img src={photo.url} />
    </div>
  );
};
