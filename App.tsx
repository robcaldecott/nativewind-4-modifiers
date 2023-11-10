import * as React from "react";
import {
  Text,
  TextInput,
  View,
  Pressable,
  PressableProps,
  TextInputProps,
} from "react-native";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import "./globals.css";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function Button({
  children,
  ...props
}: React.PropsWithChildren<PressableProps>) {
  return (
    <Pressable
      className="rounded-full w-full p-4 bg-indigo-500 active:bg-indigo-900 items-center justify-center disabled:opacity-50"
      {...props}
    >
      <Text className="text-white text-lg font-bold">{children}</Text>
    </Pressable>
  );
}

function ButtonWithDisabled({
  children,
  disabled,
  ...props
}: React.PropsWithChildren<PressableProps>) {
  return (
    <Pressable
      className={cn(
        "rounded-full w-full p-4 bg-indigo-500 active:bg-indigo-900 items-center justify-center",
        {
          "opacity-50": disabled,
        }
      )}
      disabled={disabled}
      {...props}
    >
      <Text className="text-white text-lg font-bold">{children}</Text>
    </Pressable>
  );
}

function TextField(props: TextInputProps) {
  return (
    <View className="border-2 border-slate-300 py-2 px-4 bg-white rounded-xl focus-within:border-indigo-500 h-12 justify-center">
      <TextInput {...props} />
    </View>
  );
}

function TextFieldWithFocus({ onFocus, onBlur, ...props }: TextInputProps) {
  const [hasFocus, setHasFocus] = React.useState(false);

  return (
    <View
      className={cn(
        "border-2 border-slate-300 py-2 px-4 bg-white rounded-xl h-12 justify-center",
        {
          "border-indigo-500": hasFocus,
        }
      )}
    >
      <TextInput
        {...props}
        onFocus={(event) => {
          setHasFocus(true);
          if (onFocus) {
            onFocus(event);
          }
        }}
        onBlur={(event) => {
          setHasFocus(false);
          if (onBlur) {
            onBlur(event);
          }
        }}
      />
    </View>
  );
}

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center gap-8 p-6">
      <View className="gap-2 w-full">
        <Text>:disabled does not work</Text>
        <Button disabled>No disabled styles</Button>
        <ButtonWithDisabled disabled>
          Manual disabled handling
        </ButtonWithDisabled>
      </View>

      <View className="gap-2 w-full">
        <Text>:focus-within does not work</Text>
        <TextField placeholder="No focus-within styles" />
        <TextFieldWithFocus placeholder="Manul focus handling" />
      </View>
    </View>
  );
}
