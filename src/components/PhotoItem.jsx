/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const PhotoItem = ({ data }) => {
  return (
    <Link to={`/photo/${data.id}`} className="photo">
      <img src={data.thumbnailUrl} alt={data.title} />
    </Link>
  );
};
