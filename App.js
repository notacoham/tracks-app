import * as React from "react";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";

// Create Stacks and Tabs
const AuthStack = createNativeStackNavigator();
const TrackStack = createNativeStackNavigator();
const AppTabs = createBottomTabNavigator();

// Navigator for Auth Flow
function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: true }}>
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen name="Signin" component={SigninScreen} />
    </AuthStack.Navigator>
  );
}

// Navigator for Tracks Flow to be nested in the tabs section
function TrackNavigator() {
  return (
    <TrackStack.Navigator screenOptions={{ headerShown: false }}>
      <TrackStack.Screen name="TrackList" component={TrackListScreen} />
      <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackStack.Navigator>
  );
}

// Tab Navigator of main App
function AppTabNavigator() {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen name="TrackListTab" component={TrackNavigator} />
      <AppTabs.Screen name="TrackCreateTab" component={TrackCreateScreen} />
      <AppTabs.Screen name="Account" component={AccountScreen} />
    </AppTabs.Navigator>
  );
}

// Root Navigator with ternary to check sign in token
function RootNavigatorContent() {
  const { state, tryLocalSignin } = React.useContext(AuthContext);

  // auto sign in before paint
  React.useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <NavigationContainer>
      {state.token ? <AppTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

// Whole app wrapped in AuthProvider for context
export default function App() {
  return (
    <AuthProvider>
      <RootNavigatorContent />
    </AuthProvider>
  );
}
