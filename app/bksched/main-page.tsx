import { Button } from "@/components/Button";
import { Feather } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Sentry from "@sentry/react-native";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";

const listData = [
  { id: 1, title: "Mobile Application Development", time: "1pm @ C6-401" },
  { id: 2, title: "Mobile Application Development", time: "1pm @ C6-401" },
  { id: 3, title: "Mobile Application Development", time: "1pm @ C6-401" },
  { id: 4, title: "Mobile Application Development", time: "1pm @ C6-401" },
  { id: 5, title: "Mobile Application Development", time: "1pm @ C6-401" },
];

const ListItem = ({ title, time }: { title: string; time: string }) => (
  <View className="flex-row items-center px-6 py-4">
    <View
      className="p-3 rounded-lg mr-4"
      style={{ backgroundColor: "#DCD7E3" }}
    >
      <Feather name="layers" size={24} color="#333" />
    </View>
    <View className="flex-1">
      <Text className="font-semibold text-base text-gray-900">{title}</Text>
      <Text className="text-sm text-gray-600">{time}</Text>
    </View>
    <Feather name="more-vertical" size={24} color="#333" />
  </View>
);

export default function MainTab() {
  return (
    <View className="flex-1 pt-16" style={{ backgroundColor: "#F5F3F7" }}>
      <Text className="font-bold text-4xl px-6 mb-6">Trang chính</Text>
      <View className="flex-row justify-between items-center mb-4 px-6">
        <View className="flex-row items-center space-x-2">
          <MaterialCommunityIcons name="sort" size={24} color="black" />
          <Text className="text-base font-medium">Thời gian</Text>
        </View>
        <Feather name="list" size={24} color="black" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {listData.map((item) => (
          <ListItem key={item.id} title={item.title} time={item.time} />
        ))}
        <Button
          className="mt-6 mb-6"
          title="Xem lại trang Onboarding"
          onPress={() => router.replace("/onboarding")}
        />
        <Button
          title="Gửi lỗi test Sentry"
          onPress={() => {
            Sentry.captureException(
              new Error("Test error sent from main page of BKSched"),
            );
          }}
        />
      </ScrollView>
    </View>
  );
}
