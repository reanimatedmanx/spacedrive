import OnboardingScreen from '@app/screens/onboarding/Onboarding';
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';

const OnboardingStack = createStackNavigator<OnboardingStackParamList>();

export default function OnboardingNavigator() {
	return (
		<OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
			<OnboardingStack.Screen name="Onboarding" component={OnboardingScreen} />
		</OnboardingStack.Navigator>
	);
}

export type OnboardingStackParamList = {
	Onboarding: undefined;
};

export type OnboardingStackScreenProps<Screen extends keyof OnboardingStackParamList> =
	StackScreenProps<OnboardingStackParamList, Screen>;
