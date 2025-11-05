import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="bksched" options={{ title: 'BKSched' }} />
      <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
    </Stack>
  );
}
