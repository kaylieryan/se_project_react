import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="clothing_card">
      <div className="clothing_card__card_name"> {item.name}</div>
      <img
        src={item.link}
        className="clothing_card__card_image"
        alt="clothing icon"
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
