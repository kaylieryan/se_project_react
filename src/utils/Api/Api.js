const baseUrl =
  "https://my-json-server.typicode.com/kaylieryan/se_project_react";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`error: ${res.status}`);
  }
};

export function removeItems(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
}


// export function removeItems(selectedCard) {
//   const deleteItems = fetch(`${baseUrl}/items/${selectedCard}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then(processServerResponse);
//   return deleteItems;
// }

export function fetchItems() {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
  return getItems;
}

export function postClothingItems({ name, imageUrl, weather }) {
  const postItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(processServerResponse);

  return postItems;
}
