import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);
      const imagesList = await fetchImages(query, offset);
      setImages([...images, ...imagesList.results]);
      setIsLoading(false);
    };
    getImages();
  }, [offset, query]);

  function handleLoadMore() {
    setOffset(offset + 10);
  }

  const handleChangeQuery = (queryStr) => {
    setQuery(queryStr);
    setImages([]);
  };

  return (
    <div>
      <SearchBar setQuery={handleChangeQuery} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      <LoadMoreBtn handleLoadMore={handleLoadMore} />
    </div>
  );
}

export default App;
