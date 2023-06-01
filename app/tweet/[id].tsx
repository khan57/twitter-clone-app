import { useSearchParams } from "expo-router";
import Tweet from "../../components/Tweet";
import { ActivityIndicator, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getTweet } from "../../lib/api/tweets";

export default function TweetScreen() {
  const { id } = useSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["tweet", id],
    queryFn: () => getTweet(id as string),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error?.message}</Text>;
  }
  if (!data) {
    return <Text>Tweet not found!</Text>;
  }
  return <Tweet tweet={data} />;
}
