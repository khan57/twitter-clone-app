import { API_URL, authToken } from "./config";

export const login = async (data: { email: string }) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    method: "POST",
  });
  if (res.status !== 200) {
    console.log(await res.json());

    throw new Error("Error in login");
  }
};
export const authenticate = async (data: {
  email: string;
  emailToken: string;
}) => {
  const res = await fetch(`${API_URL}/auth/authenticate`, {
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data ),
    method: "POST",
  });
  if (res.status !== 200) {
    console.log(await res.json());

    throw new Error("Error in login");
  }

  return await res.json();
};
