import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const imagesList = await fetchImages(0);
      setImages(imagesList);
    };
    getImages();
  }, []);

  return (
    <div>
      {/* <SearchBar /> */}
      Image Gallery
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
