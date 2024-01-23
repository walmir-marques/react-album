/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Galleyitem.module.css";

function GalleryItem({ id, title }) {
  return (
    <div className={styles.item}>
      <Link to={`/album/${id}`}>{title}</Link>
    </div>
  );
}

export default GalleryItem;
