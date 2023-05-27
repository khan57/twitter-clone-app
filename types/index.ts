export type User = {
    id: string;
    username: string;
    name: string;
    image?: String;
  };
  export type TweetType = {
    content: string;
    user: User;
    id:string,
    createdAt: string;
    updatedAt:string;
    image?:string;
    numberOfComments?: number;
    numberOfRetweets?: number;
    numberOfLikes?: number;
    impressions?: number;

  };
  