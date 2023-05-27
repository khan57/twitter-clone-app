import { Text, View } from "react-native";
import { TweetType } from "../types";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";
type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: number | string;
};
export const IconButton = ({ icon, text }: IconButtonProps) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    {/* icon */}

    <EvilIcons name={icon} size={22} color={"gray"} />

    {/* number */}
    <Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
  </View>
);
