import { baseUrl } from "./constants";
import { processServerResponse } from "./constants";

//GET items
export const fetchItems = () => {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(processServerResponse);

  return getItems;
};

//POST items

export const postClothingItems = ({ name, imageUrl, weather }) => {
  const postClothingItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(processServerResponse);

  return postClothingItems;
};

//UPDATE items
export const addCardLike = (item) => {
  return fetch(`${baseUrl}/items/${item._id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => processServerResponse(res));
};

//DELETE items

export function removeItems(selectedCard) {
  console.log("calling removeItems");
  const deleteItems = fetch(`${baseUrl}/items/${selectedCard._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(processServerResponse);
  return deleteItems;
}

export const removeCardLike = (item) => {
  return fetch(`${baseUrl}/items/${item._id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => processServerResponse(res));
};
