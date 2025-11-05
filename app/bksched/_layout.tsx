import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="main-page" options={{ title: 'Trang chính', tabBarIcon: () => <MaterialCommunityIcons name="web" size={24} color="black" /> }} />
      <Tabs.Screen
        name="notifications"
        options={{ title: 'Thông báo', tabBarIcon: () => <MaterialCommunityIcons name="inbox" size={24} color="black" /> }}
      />
    </Tabs>
  );
}
