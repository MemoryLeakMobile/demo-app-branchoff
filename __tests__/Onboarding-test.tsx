import { fireEvent, render } from '@testing-library/react-native';
import OnboardingScreen from '../app/onboarding';

jest.mock('expo-router', () => ({
    router: { replace: jest.fn() },
}));

jest.mock('@/utils/asyncStorage', () => ({
    storeData: jest.fn(),
}));

jest.mock('@react-native-async-storage/async-storage', () => ({
    __esModule: true,
    default: {
        getItem: jest.fn(async () => null),
        setItem: jest.fn(async () => null),
        removeItem: jest.fn(async () => null),
    },
}));


describe('OnboardingScreen', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders first page title', () => {
        const { getByText } = render(<OnboardingScreen />);
        expect(getByText('Quản lý thời khóa biểu thông minh cùng BKSched')).toBeTruthy();
    });

    it('stores onboarding flag and navigates when Skip is pressed', () => {
        const { getByText } = render(<OnboardingScreen />);

        const skip = getByText('Skip');
        fireEvent.press(skip);

        const asyncModule = require('@/utils/asyncStorage');
        const router = require('expo-router').router;

        expect(asyncModule.storeData).toHaveBeenCalledWith('onboarded', '1');
        expect(router.replace).toHaveBeenCalledWith('/bksched/main-page');
    });
});
