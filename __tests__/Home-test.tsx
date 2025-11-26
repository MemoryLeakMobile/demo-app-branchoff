import { fireEvent, render } from '@testing-library/react-native';

jest.mock('expo-router', () => ({
    router: { replace: jest.fn() },
}));

import MainTab from '../app/bksched/main-page';

describe('MainTab (Home) screen', () => {
    beforeEach(() => jest.clearAllMocks());

    it('renders header text', () => {
        const { getByText } = render(<MainTab />);
        expect(getByText('Trang chính')).toBeTruthy();
    });

    it('navigates to onboarding when the button is pressed', () => {
        const { getByText } = render(<MainTab />);

        const btn = getByText('Xem lại trang Onboarding');
        fireEvent.press(btn);

        const router = require('expo-router').router;
        expect(router.replace).toHaveBeenCalledWith('/onboarding');
    });
});
