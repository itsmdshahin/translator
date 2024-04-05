import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../utils/colors';
import { useState } from 'react';

export default function HomeScreens(props) {
  const [enteredText, setEnterText] = useState("");
  const [resultText, setResultText] = useState("Translation");

  return (
    <View style={styles.container}>
      <View style={styles.languageSelector}>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => props.navigation.navigate('languageSelect', { title : "Translate from!"}) }
          activeOpacity={0.7}
        >
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>

        <View style={styles.arrowContainer}>
          <AntDesign name="arrowright" size={24} color={colors.primary} />
        </View>

        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => console.log('Bangla Selected')}
          activeOpacity={0.7}
        >
          <Text style={styles.languageText}>Bangla</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.InputContainer}>
        <TextInput
          multiline
          placeholder='Enter Text!'
          style={styles.TextInput}
          onChangeText={(text) => setEnterText(text)}
        />

        <TouchableOpacity
          disabled={enteredText === ""}
          style={styles.iconContainer}>
          <Ionicons
            name="arrow-forward-circle-sharp"
            size={24}
            color={enteredText !== "" ? colors.primary : colors.lightGray} />
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{resultText}</Text>
        <TouchableOpacity
          disabled={resultText === ""}
          style={styles.iconContainer}>
          <Ionicons
            name="md-copy-sharp"
            size={24}
            color={resultText !== "" ? colors.text : colors.textColorDis} />
        </TouchableOpacity>
      </View>

      <View style={styles.HistoryContainer}>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  languageSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    paddingBottom: 10,
    marginHorizontal: 20,
  },
  languageButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  languageText: {
    color: colors.text,
    fontSize: 16,
    fontFamily: 'regular',
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  arrowContainer: {
    paddingHorizontal: 10,
  },
  InputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  TextInput: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: 'regular',
    letterSpacing: 0.5,
    height: 90,
    color: colors.text,
  },
  iconContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    flexDirection:'row',
    height:90,
    paddingVertical: 15,
  },
  resultText:{
    fontFamily:'regular',
    letterSpacing: 0.3,
    color: colors.primary,
    flex: 1,
    marginHorizontal: 20,
  },
  HistoryContainer:{
    backgroundColor: colors.greyBackground,
    flex:1,
    padding: 10,

  }
});
