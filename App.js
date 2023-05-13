import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Top from "./components/Top";

export default function App() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("./assets/bg.png")}
      // blurRadius={1}
    >
      <View style={styles.container}>
        
        {/* TOP SECTION */}
        <Top />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    marginHorizontal: 10,
    marginTop: 30,
  },
});
