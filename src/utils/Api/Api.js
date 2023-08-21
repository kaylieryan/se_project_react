const baseUrl =
  "https://my-json-server.typicode.com/kaylieryan/se_project_react";

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
};

// GET Items
export const getItems = () => {
  const clothingApi = fetch(`${baseUrl}/items`).then(checkResponse);
  return clothingApi;
}

// POST Items
export function postItem({ name, link, weather }) {
  console.log(postItem);
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      link,
      weather,
    }),
  }).then(checkResponse);
}

// DELETE Items
export function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}
