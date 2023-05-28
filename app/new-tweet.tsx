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
} from "react-native";

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
  const onTweetPress = () => {
    console.log("onTweetPress");
    setText("");
    router.back();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>
            Cancel
          </Link>
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
