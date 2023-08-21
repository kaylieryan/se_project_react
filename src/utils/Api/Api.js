const baseUrl =
  "https://my-json-server.typicode.com/kaylieryan/se_project_react";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const removeItems = (selectedCard) => {
  const deleteItems = fetch(`${baseUrl}/items/${selectedCard}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
  return deleteItems;
};

export const fetchItems = () => {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
  return getItems;
};

export const loadItems = ({ name, link, weather }) => {
  const postItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 99, name, imageUrl: link, weather }),
  }).then(checkResponse);

  return postItems;
};
