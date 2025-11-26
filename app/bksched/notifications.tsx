import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, Text, View } from 'react-native';

const listData = [
  { id: 1, title: 'Mobile Application Development', subtitle: 'Đổi từ phòng C6-401 thành C4-401', time: '1 ngày trước' },
  { id: 2, title: 'Tiếng Nhật 7', subtitle: 'Đổi từ phòng C4-301 thành C4-402', time: '2 ngày trước' },
  { id: 3, title: 'Tư tưởng Hồ Chí Minh', subtitle: 'Hủy tiết', time: '2 ngày trước' },
];

const ListItem = ({ title, subtitle, time }: { title: string, subtitle: string, time: string }) => (
  <View className="flex-row items-center px-6 py-4">
    <View className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#DCD7E3' }}>
      <Feather name="layers" size={24} color="#333" />
    </View>
    <View className="flex-1">
      <Text className="font-semibold text-base text-gray-900">{title}</Text>
      <Text className="text-sm text-gray-600">{subtitle}</Text>
            <Text className="text-sm text-gray-600">{time}</Text>
    </View>
    <Feather name="more-vertical" size={24} color="#333" />
  </View>
);

export default function MainTab() {
  return (
    <View className="flex-1 pt-16" style={{ backgroundColor: '#F5F3F7' }}>
      <Text className="font-bold text-4xl px-6 mb-6">Thông báo</Text>
      <View className="flex-row justify-between items-center mb-4 px-6">
        <View className="flex-row items-center space-x-2">
          <MaterialCommunityIcons name="sort" size={24} color="black" />
          <Text className="text-base font-medium">Thời gian</Text>
        </View>
        <Feather name="list" size={24} color="black" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {listData.map((item) => (
          <ListItem key={item.id} title={item.title} subtitle={item.subtitle} time={item.time} />
        ))}
      </ScrollView>
    </View>
  );
}