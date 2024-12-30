import { Provider } from "react-redux";
import { store } from "../redux/store";
import { StyleSheet } from "react-native";
import Routing from "./Routing";

const Root = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Root;
