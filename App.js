import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";

export default function App() {
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("./assets/bg.png")}
        // blurRadius={1}
      >
        <View style={styles.container}>
          <Top />
          <Middle />
          <Bottom/>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    marginHorizontal: 20,
    marginTop: 55,
  },
});
