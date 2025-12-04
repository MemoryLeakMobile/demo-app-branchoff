import * as Sentry from "@sentry/react-native";
import { Stack, useNavigationContainerRef } from "expo-router";
import { useEffect } from "react";
import "../global.css";

const navigationIntegration = Sentry.reactNavigationIntegration();

Sentry.init({
  dsn: "https://9d0639b2080805e1252e0cfbf320dfe5@o4510475319836672.ingest.us.sentry.io/4510475320819712", // Thay bằng DSN của bạn
  tracePropagationTargets: ["https://myproject.org", /^\/api\//],
  debug: true, // Bật để xem logs khi test

  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% transactions khi test
  enableAutoSessionTracking: true,
  sessionTrackingIntervalMillis: 5000,

  // User Interaction Tracking
  enableUserInteractionTracing: true,

  // Profiling
  profilesSampleRate: 1.0,

  // Session Replay
  replaysSessionSampleRate: 1.0, // Ghi lại 100% session khi test
  replaysOnErrorSampleRate: 1.0, // Ghi lại 100% khi có error

  // Integrations
  integrations: [
    // Mobile replay integration with minimal configuration
    // See: https://docs.sentry.io/platforms/react-native/session-replay/configuration/
    Sentry.mobileReplayIntegration({
      maskAllText: true,
      maskAllImages: true,
    }),
    navigationIntegration,
    Sentry.hermesProfilingIntegration({
      platformProfilers: true,
    }),
  ],

  // Privacy
  sendDefaultPii: false, // Không gửi thông tin cá nhân mặc định
  maxBreadcrumbs: 150,

  // Enable native crash handling
  enableNative: true,
  enableNativeCrashHandling: true,
  enableAutoPerformanceTracing: true,

  // Debug configuration
  _experiments: {
    captureFailedRequests: true,
  },
});

export default Sentry.wrap(function RootLayout() {
  const ref = useNavigationContainerRef();
  useEffect(() => {
    if (ref) {
      navigationIntegration.registerNavigationContainer(ref);
    }
  }, [ref]);
  // Thiết lập user context cho analytics
  useEffect(() => {
    Sentry.setUser({
      id: "memoryleakmobile_test_2025",
      email: "nghia.ho310pf@hcmut.edu.vn",
      username: "MemoryLeakMobile",
    });
    Sentry.setTag("group", "memoryleakmobile");
  }, []);

  return (
    <Stack>
      <Stack.Screen name="bksched" options={{ title: "BKSched" }} />
      <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
    </Stack>
  );
});
