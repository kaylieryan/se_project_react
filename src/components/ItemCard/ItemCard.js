import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemCard = ({ item, onSelectCard, likeClothingItem }) => {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemLikeButtonClassName = `clothing_card__like-button ${
    isLiked
      ? "clothing_card__like-button_active"
      : "clothing_card__like-button_inactive"
  }`;
  const handleCardLikeClick = (item) => {
     likeClothingItem(item, likeClothingItem, currentUser);
  };

  return (
    <div className="clothing_card">
      <h3 className="clothing_card__card_name"> {item.name}</h3>
      <button
        type="button"
        className={itemLikeButtonClassName}
        onClick={() => handleCardLikeClick(item)}></button>
      <img
        src={item.imageUrl}
        className="clothing_card__card_image"
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
