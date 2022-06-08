import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SingleTileButton = ({number}) => {
  return (
    <TouchableOpacity style={styles.tileContainer}>
      <View>
        <Text style={styles.singleTileText}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SingleTileButtonWithIcon = () => {
  return (
    <TouchableOpacity style={styles.tileContainer}>
      <View>
        {/* <Text style={styles.singleTileText}> */}
        <Icon name="add" size={30} color="#900" />
        {/* </Text> */}
      </View>
    </TouchableOpacity>
  );
};

const DisplayScreenComponent = () => {
  return <View style={styles.displayScreenContainer}></View>;
};

const App = () => {
  return (
    <ScrollView>
      <View>
        <DisplayScreenComponent />
        <View style={styles.buttonKeysContainer}>
          <SingleTileButton number={1} style={styles.singleTileContainer} />
          <SingleTileButton number={1} style={styles.singleTileContainer} />
          <SingleTileButton number={1} style={styles.singleTileContainer} />
          <SingleTileButton number={1} style={styles.singleTileContainer} />
          <SingleTileButtonWithIcon />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    // backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '7%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  displayScreenContainer: {
    flex: 3.5,
    backgroundColor: 'red',
    width: '100%',
    height: 300,
  },
  singleTileContainer: {
    width: '100%',
    fontSize: 20,
  },
  buttonKeysContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  singleTileText: {
    fontSize: 29,
    fontFamily: 'sans-serif',
    fontWeight: '600',
  },
});

export default App;
