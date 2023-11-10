import * as React from "react";
import { Text, TextInput, View } from "react-native";
import "./globals.css";

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center gap-8 p-6">
      <View className="gap-2 w-full">
        <Text>The placeholder below should be yellow-300</Text>
        <TextInput
          className="bg-slate-900 h-10 text-white px-2"
          placeholder="Placeholder text"
          placeholderClassName="text-yellow-300"
        />
      </View>
    </View>
  );
}
