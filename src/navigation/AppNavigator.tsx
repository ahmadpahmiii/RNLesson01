import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import DetailScreen from "../screens/detail/DetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabIcon = ({focused}: {focused: boolean}) => <Text>{focused ? '🏠' : '🏡'}</Text>;
const ProfileTabIcon = ({focused}: {focused: boolean}) => <Text>{focused ? '👤' : '👥'}</Text>;

function HomeTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#AAAAAA',
          headerShown: false,
        }}
      >
        <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: HomeTabIcon}} />

        <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarIcon: ProfileTabIcon}} />
      </Tab.Navigator>
    );
}

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator;