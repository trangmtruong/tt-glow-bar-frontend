import { baseUrl } from "./constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

//likeCard func

function likeCard(itemId, token) {
  return request(`${baseUrl}/items/${itemId}/likes/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ token }),
  });
}
//unlikeCard func

function unlikeCard(itemId, token) {
  return (
    request(`${baseUrl}/items/${itemId}/likes/`),
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }
  );
}

export { checkResponse, request, likeCard, unlikeCard };
