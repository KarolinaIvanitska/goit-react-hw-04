const ImageCard = ({ item }) => {
  return (
    <div>
      <img src={item.urls.small} alt={item.urls.alt_description} />
    </div>
  );
};

export default ImageCard;
