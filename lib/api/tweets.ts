import { API_URL,authToken } from "./config";


export const listTweets = async () => {

  const res = await fetch(`${API_URL}/tweet`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (res.status === 401) {
    throw new Error("Not authorized.Please login");
   }
  if (res.status !== 200) {
   throw new Error("Error fetching the tweets");
  }

  const data = await res.json();
  return data;
};
