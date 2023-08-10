import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  label: String | number;
  style: string;
  value: any;
  setValue: any;
}

const width = Dimensions.get("window").width;

const margin = 5;

export default (props: Props) => {
  const { label, style, setValue, value } = props;
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
        onPress={() => setValue(value)}
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
