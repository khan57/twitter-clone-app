import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { createTweet } from "../lib/api/tweets";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweet() {
  const router = useRouter();
  const [text, setText] = useState("");

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: createTweet,
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ["tweets"] });
      queryClient.setQueriesData(["tweets"], (oldData) => [data, ...oldData]);
    },
  });

  const onTweetPress = async () => {
    try {
      await mutateAsync({ content: text });
      console.log("onTweetPress");

      setText("");
      router.back();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>
            Cancel
          </Link>

          {isLoading && <ActivityIndicator />}

          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={{ uri: user.image, width: 50, height: 50 }}
            style={styles.image}
          />
          <TextInput
            placeholder="What's happening?"
            multiline
            numberOfLines={5}
            style={styles.input}
            value={text}
            onChangeText={setText}
          />
        </View>
        {isError && <Text>{error.message}</Text>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 40 : 0,
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 50,
    aspectRatio: 1,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1c9bf0",
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
