import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello World</Text>
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function DrawerMenuButton() {
  const {openDrawer} = useNavigation();

  return (
    <TouchableOpacity
      onPress={openDrawer}
      accessibilityLabel={'Open main menu'}
      testID="DrawerMenuButton.Touchable">
      <Text style={{color: '#ffffff'}}>Menu</Text>
    </TouchableOpacity>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#ffffff',
          headerLeft: () => <DrawerMenuButton />,
        }}
      />
    </Stack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Drawer.Navigator initialRouteName="DrawerScreen_1">
          <Drawer.Screen
            name="DrawerScreen_1"
            component={HomeStack}
            options={{title: 'Home'}}
          />
          <Drawer.Screen
            name="DrawerScreen_2"
            component={NotificationsScreen}
            options={{title: 'Notifications'}}
          />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
