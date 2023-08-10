import { StyleSheet, Text, View } from "react-native";
import { selectCalcul } from "./redux/selectors";
import { useSelector } from "react-redux";

export default () => {
  const calcul = useSelector(selectCalcul);
  console.log(calcul);

  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>{calcul}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    borderColor: "white",
    alignItems: "flex-end",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 40,
  },
  textInput: {},
});
