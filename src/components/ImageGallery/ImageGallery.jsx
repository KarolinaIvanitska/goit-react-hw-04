import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </div>
  );
};

export default ImageGallery;
