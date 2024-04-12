import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);
      const imagesList = await fetchImages(offset);
      setImages([...images, ...imagesList.results]);
      setIsLoading(false);
    };
    getImages();
  }, [offset]);

  function handleLoadMore() {
    setOffset(offset + 10);
  }

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      <LoadMoreBtn handleLoadMore={handleLoadMore} />
    </div>
  );
}

export default App;
