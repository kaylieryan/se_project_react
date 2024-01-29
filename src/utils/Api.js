import { baseUrl } from "./constants";
import { processServerResponse } from "./constants";

export function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}

export function removeItems(selectedCard) {
  const deleteItems = fetch(`${baseUrl}/items/${selectedCard}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(processServerResponse);
  return deleteItems;
}

export function fetchItems() {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(processServerResponse);
  return getItems;
}

export function postClothingItems({ name, imageUrl, weather }) {
  const postItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(processServerResponse);

  return postItems;
}
