import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import * as React from "react";
import ButtonUI from "./src/ButtonUI";
import items from "./src/button.list.json";
import ScreenValue from "./src/ScreenValue";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import store from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

interface ItemProp {
  label: string | number;
  style: string;
  value: string | number;
}

export default function App() {
  const [data, setDataSource] = React.useState<Array<ItemProp>>([]);
  const [value, setValue] = React.useState<number>(0);

  React.useEffect(() => {
    return setDataSource(items);
  }, [setDataSource, items]);

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <ScreenValue input={value} />
          {data && (
            <FlatList
              numColumns={4}
              horizontal={false}
              data={data}
              style={{ flexGrow: 0, padding: 5 }}
              renderItem={({ item }) => (
                <ButtonUI
                  label={item.label}
                  style={item.style}
                  setValue={setValue}
                  value={item.value}
                />
              )}
            />
          )}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "flex-end",
  },
});
