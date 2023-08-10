import { StyleSheet, Text, View } from "react-native";

export default (props: { input: any }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>{props.input}</Text>
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
