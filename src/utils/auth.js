import { baseUrl } from "./constants";
import { request } from "./api";

function signUp({ name, email, password }) {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,

      email,
      password,
    }),
  });
}

function signIn({ email, password }) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

function getCurrentUser(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export { signUp, signIn, getCurrentUser };
