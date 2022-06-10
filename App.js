import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [inputData, setInputData] = useState('');
  const [innerValue, setInnerValue] = useState('');

  const handleInputKeyPressed = (keyType, keyValue) => {
    console.log('keyType>>>>', keyType, '<<<keyValuE>>>>', keyValue);
    if (keyType === 'number') {
      setInputData(`${inputData}${keyValue}`);
    } else {
      if (keyValue === 'trash') {
        setInputData('');
      } else if (keyValue === 'backspace') {
        setInputData(inputData.slice(0, -1));
      } else {
        if (
          !(
            inputData.slice(-1) === '+' ||
            inputData.slice(-1) === '-' ||
            inputData.slice(-1) === '/' ||
            inputData.slice(-1) === 'x'
          )
        ) {
          if (keyValue === 'plus') {
            setInputData(`${inputData}+`);
            setInnerValue(parseFloat(inputData));
          } else if (keyValue === 'minus') {
            setInputData(`${inputData}-`);
          } else if (keyValue === 'times') {
            setInputData(`${inputData}x`);
          } else if (keyValue === 'divide') {
            setInputData(`${inputData}/`);
          } else if (keyValue === 'percent') {
            setInputData(`${inputData}`);
          }
        }
      }
    }
  };

  console.log(
    'operationsssss>>>',
    inputData
      .split('')
      .map(item => {
        if (isNaN(item)) {
          console.log('inside if>><><');
          return item;
        } else {
          console.log('inside else>><><');
          return parseFloat(item);
        }
      })
      .join(''),
  );

  console.log('input data>>>>', parseFloat(inputData));

  const DisplayScreenComponent = () => {
    return (
      <View style={styles.displayScreenContainer}>
        <View style={styles.displayRow}>
          <Text style={styles.displayRowText}>{inputData}</Text>
        </View>
      </View>
    );
  };

  const SingleTileButtonWithIcon = ({name}) => {
    return (
      <TouchableOpacity
        style={styles.tileContainer}
        onPress={() => handleInputKeyPressed('operator', name)}>
        <View>
          {/* <Text style={styles.singleTileText}> */}
          <Icon name={name} size={25} color="#902" />
          {/* </Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  const SingleTileButton = ({number}) => {
    return (
      <TouchableOpacity
        style={styles.tileContainer}
        onPress={() => handleInputKeyPressed('number', number)}>
        <View>
          <Text style={styles.singleTileText}>{number}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    // <ScrollView>
    <View style={styles.mainContainer}>
      <DisplayScreenComponent />
      <View style={styles.buttonsMainContainer}>
        <View style={styles.buttonKeysContainer}>
          <SingleTileButtonWithIcon name={'trash'} />

          <SingleTileButtonWithIcon
            name={'backspace'}
            style={styles.singleTileContainer}
          />
          <SingleTileButtonWithIcon
            name={'percent'}
            style={styles.singleTileContainer}
          />
          <SingleTileButtonWithIcon
            name={'divide'}
            style={styles.singleTileContainer}
          />
        </View>
        <View style={styles.buttonKeysContainer}>
          <SingleTileButton number={7} style={styles.singleTileContainer} />
          <SingleTileButton number={8} style={styles.singleTileContainer} />
          <SingleTileButton number={9} style={styles.singleTileContainer} />

          <SingleTileButtonWithIcon name={'times'} />
        </View>
        <View style={styles.buttonKeysContainer}>
          <SingleTileButton number={4} style={styles.singleTileContainer} />
          <SingleTileButton number={5} style={styles.singleTileContainer} />
          <SingleTileButton number={6} style={styles.singleTileContainer} />

          <SingleTileButtonWithIcon name={'minus'} />
        </View>
        <View style={styles.buttonKeysContainer}>
          <SingleTileButton number={1} style={styles.singleTileContainer} />
          <SingleTileButton number={2} style={styles.singleTileContainer} />
          <SingleTileButton number={3} style={styles.singleTileContainer} />

          <SingleTileButtonWithIcon name={'plus'} />
        </View>
        <View style={styles.buttonKeysContainer}>
          <SingleTileButtonWithIcon name={'window-restore'} />
          <SingleTileButton number={0} style={styles.singleTileContainer} />
          <SingleTileButton number={'.'} style={styles.singleTileContainer} />

          <SingleTileButtonWithIcon name={'equals'} />
        </View>
      </View>
    </View>
    // </ScrollView>
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
    flex: 2.7,
    // backgroundColor: 'red',
    width: '100%',
  },
  singleTileContainer: {
    width: '100%',
    fontSize: 20,
  },
  buttonKeysContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  singleTileText: {
    fontSize: 29,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  buttonsMainContainer: {
    flex: 4,
    borderTopColor: '#b2beb5',
    borderTopWidth: 0.5,
    // backgroundColor: 'green',
  },
  mainContainer: {
    flex: 1,
  },
  displayRow: {
    flex: 0.9,
    display: 'flex',
    justifyContent: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  displayRowText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '700',
    display: 'flex',
    textAlign: 'right',
  },
});

export default App;
