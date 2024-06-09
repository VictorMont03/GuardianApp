import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home/Index";
import { Events } from "../screens/Events/Index";
import { GlobeSimple, House, Power } from "phosphor-react-native";
import { Logout } from "../screens/Logout/Index";
import { Login } from "../screens/Login/Index";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
	return (
		<Navigator screenOptions={{
			tabBarStyle: {
				backgroundColor: 'transparent',
				height: 88,
				alignItems: 'center',
				borderTopWidth: 1,
				borderTopColor: '#1fadff'
			},
			headerShown: false,
			tabBarActiveTintColor: '#1fadff',
		}}>
			<Screen name="Home" component={Home} options={{
				tabBarIcon: ({ color }) => {
					return (
						<House color={color} size={30} weight="light" />
					)
				}
			}} />
			<Screen name="Eventos" component={Events}
				options={{
					tabBarIcon: ({ color }) => {
						return (
							<GlobeSimple color={color} size={30} weight="light" />
						)
					}
				}} />
			<Screen name="Sair" component={Logout}
				options={{
					tabBarIcon: ({ color }) => {
						return (
							<Power color={color} size={30} weight="light" />
						)
					}
				}} />
			<Screen name="Logar" component={Login}
				options={{
					tabBarIcon: ({ color }) => {
						return (
							<Power color={color} size={30} weight="light" />
						)
					}
				}} />
		</Navigator>
	)
}