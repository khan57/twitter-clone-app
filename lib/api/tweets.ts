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


export const getTweet = async(id:string)=>{
    const res = await fetch(`${API_URL}/tweet/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    
      if (res.status === 401) {
        throw new Error("Not authorized.Please login");
       }
      if (res.status !== 200) {
       throw new Error("Error fetching the tweet detail");
      }
    
      const data = await res.json();
      return data;

}


export const createTweet = async(payload:{content:string})=>{
    const res = await fetch(`${API_URL}/tweet`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type':"application/json"
        },
        method:"POST",
        body:JSON.stringify(payload)
      });
    
      if (res.status === 401) {
        throw new Error("Not authorized.Please login");
       }
      if (res.status !== 200) {
        console.log(await res.json());
        
       throw new Error("Error creating tweet");
      }
    
      const data = await res.json();
      return data;

}