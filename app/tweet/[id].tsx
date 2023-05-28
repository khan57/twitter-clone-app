import { useSearchParams } from "expo-router";
import tweets from "../../assets/data/tweets";
import Tweet from "../../components/Tweet";
import { Text } from "react-native";

export default function TweetScreen() {
  const params = useSearchParams();
  const tweet = tweets.find((tweet) => tweet.id === params.id);
  if (!tweet) {
    return <Text>Tweet not found!</Text>;
  }
  return <Tweet tweet={tweet} />;
}
