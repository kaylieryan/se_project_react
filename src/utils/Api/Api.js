const baseUrl =
  "https://my-json-server.typicode.com/kaylieryan/se_project_react";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`error: ${res.status}`);
  }
};

export const removeItems = (id) => {
  const deleteItems = fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
  return deleteItems;
};

export const fetchItems = () => {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
  return getItems;
};

export const loadItems = ({ name, link, weather }) => {
  const postItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 99, name, imageUrl: link, weather }),
  }).then(processServerResponse);

  return postItems;
};

export const api = { removeItems, fetchItems, loadItems };

export default api;


