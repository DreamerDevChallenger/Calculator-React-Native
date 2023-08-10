import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

import * as calculAction from "./redux/reducer/calcul";

interface Props {
  label: String | number;
  style: string;
  value: string;
}

const width = Dimensions.get("window").width;

const margin = 5;

export default (props: Props) => {
  const { label, style, value } = props;
  const someObj: Object = value;

  const dispatch = useDispatch();

  const handlePress = () =>
    value === "one"
      ? dispatch(calculAction.one())
      : value === "two"
      ? dispatch(calculAction.two())
      : value === "three"
      ? dispatch(calculAction.three())
      : value === "four"
      ? dispatch(calculAction.four())
      : value === "five"
      ? dispatch(calculAction.five())
      : value === "six"
      ? dispatch(calculAction.six())
      : value === "seven"
      ? dispatch(calculAction.seven())
      : value === "eight"
      ? dispatch(calculAction.eight())
      : value === "nine"
      ? dispatch(calculAction.nine())
      : value === "zero"
      ? dispatch(calculAction.zero())
      : value === "remove"
      ? dispatch(calculAction.remove())
      : value === "plus"
      ? dispatch(calculAction.plus())
      : value === "less"
      ? dispatch(calculAction.less())
      : value === "multiply"
      ? dispatch(calculAction.multiply())
      : value === "divide"
      ? dispatch(calculAction.divide())
      : value === "reset"
      ? dispatch(calculAction.reset())
      : value === "percent"
      ? dispatch(calculAction.percent())
      : value === "equal" && dispatch(calculAction.result());
  return (
    <View
      style={[
        styles.button,
        style === "equal" && styles.buttonEqual,
        style === "primary" && styles.buttonPrimary,
        style === "secondary" && styles.buttonSecondary,
      ]}
    >
      <Pressable
        android_ripple={{
          color: "rgba(255,255,255,0.5)",
          borderless: true,
        }}
        onPress={handlePress}
      >
        <Text style={[styles.text, style === "equal" && styles.textEqual]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: margin,
    flex: 1,
    height: width / 4 - margin * 2,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 28,
    textAlign: "center",
    color: "white",
  },
  buttonPrimary: {
    backgroundColor: "#1A1A1A",
  },
  buttonSecondary: {
    backgroundColor: "#373737",
  },
  buttonEqual: {
    flex: 2,
    marginLeft: margin * 3,
    backgroundColor: "#F95534",
  },
  textEqual: {
    fontSize: 42,
  },
});
