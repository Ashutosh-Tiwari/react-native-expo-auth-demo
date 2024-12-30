import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Root from "./src/navigation";

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Root />
    </GestureHandlerRootView>
  );
};

// TODO: add prettier, eslint, path alias, implement testing framework (if time permits)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
