import { storeData } from "@/utils/asyncStorage";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from "expo-router";
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreen() {
const backToHome = () => {
  storeData('onboarded', '1');
  router.replace('/bksched/main-page');
};
return (
  <Onboarding
    onDone={backToHome}
    onSkip={backToHome}
    pages={[
      {
        backgroundColor: '#fef7ff',
        image: <MaterialCommunityIcons name="calendar-today" size={128} color="black"/>,
        title: 'Quản lý thời khóa biểu thông minh cùng BKSched',
        subtitle: 'Quản lý lịch học dễ dàng hơn bao giờ hết',
      },
      {
        backgroundColor: '#fef7ff',
        image: <MaterialCommunityIcons name="swap-horizontal" size={128} color="black"/>,
        title: 'Đồng bộ tự động với Google Calendar',
        subtitle: 'Mọi thay đổi trong MyBK sẽ tự động cập nhật sang lịch cá nhân của bạn.',
      },
      {
        backgroundColor: '#fef7ff',
        image: <MaterialCommunityIcons name="clock-outline" size={128} color="black"/>,
        title: 'Không bỏ lỡ bất kỳ thay đổi nào',
        subtitle: 'Khi có thay đổi về phòng học, giờ học hoặc lịch thi, bạn sẽ được thông báo ngay.',
      },
      {
        backgroundColor: '#fef7ff',
        image: <MaterialCommunityIcons name="account-group-outline" size={128} color="black"/>,
        title: 'Thiết kế tối giản, tập trung vào trải nghiệm',
        subtitle: 'BKSched được tối ưu cho sinh viên - nhanh, nhẹ và dễ sử dụng trên mọi thiết bị',
      },
      {
        backgroundColor: '#fef7ff',
        image: <MaterialCommunityIcons name="account-circle" size={128} color="black"/>,
        title: 'BKSched',
        subtitle: 'Hãy đăng nhập để bắt đầu đồng bộ lịch học',
      }
    ]}
  />
);
}
