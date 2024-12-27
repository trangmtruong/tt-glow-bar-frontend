import { baseUrl } from "./constants";
import { request } from "./api";

function signUp({ name, avatarUrl, email, password }) {
  return request(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      avatar,
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

//getCurrentUser

//editProfile

export { signUp, signIn };
