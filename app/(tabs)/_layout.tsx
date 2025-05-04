import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: '#25292e' },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#ffd33d',
        tabBarStyle: { backgroundColor: '#25292e' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              color={color}
              name={focused ? 'home-sharp' : 'home-outline'}
              size={24}
            />
          ),
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              color={color}
              name={
                focused ? 'information-circle' : 'information-circle-outline'
              }
              size={24}
            />
          ),
          title: 'About',
        }}
      />
    </Tabs>
  );
}
