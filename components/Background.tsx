import { ImageBackground, StyleSheet, ViewStyle } from "react-native";
import { ReactNode } from "react";

const PlaceholderImage = require("@/assets/images/back-ground.png");

type BackgroundProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export function Background({ children, style }: BackgroundProps) {
  return (
    <ImageBackground
      source={PlaceholderImage}
      style={[styles.container, style]}
      imageStyle={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
