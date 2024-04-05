import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreens from './screens/HomeScreens';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './screens/SettingsScreen';
import SaveScreen from './screens/SaveScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import colors from './utils/colors';
import LanguageSelectScreen from './screens/LanguageSelectScreen';

SplashScreen.preventAutoHideAsync();


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (props) => <Entypo name="home" size={props.size} color={props.color} />
        }}

      />
      <Tab.Screen
        name="Saved"
        component={SaveScreen}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: (props) => <Entypo name="save" size={props.size} color={props.color} />
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: (props) => <Ionicons name="settings" size={props.size} color={props.color} />
        }}
      />

    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

export default function App() {

  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require("./assets/fonts/Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),

        });
      }
      catch (e) {
        console.log(e);
      }
      finally {
        setAppIsLoaded(true);
        SplashScreen.hideAsync();
      }
    };
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }

  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        onLayout={onLayout}
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'bold',
            color: '#ffffff'
          },
          headerStyle: {
            backgroundColor: colors.primary
          }
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="main"
            component={TabNavigator}
            options={{
              headerTitle: "Translate"
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="setting"
            component={SettingsScreen}
          // options={{
          //   headerTitle: "SettingsScreen"
          // }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="saved"
            component={SaveScreen}
          // options={{
          //   headerTitle: "Translate"
          // }}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            presentation:'containedModal',
            headerStyle: {
              backgroundColor:'#fff'
            }, 
            headerTitleStyle:{
              color: colors.text,
              fontFamily:'medium'
              
            }
          }}
        >
          <Stack.Screen
            name="languageSelect"
            component={LanguageSelectScreen}
          />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
