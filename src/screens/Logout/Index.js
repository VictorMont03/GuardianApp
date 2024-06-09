import { Alert, Button, Image, StyleSheet, Text, View } from "react-native"
import { INFOS } from "../../utils/Infos"

import Logo from "../../assets/favicon.png"
import PowerButton from "../../assets/power.svg"
import { Svg, SvgUri } from "react-native-svg"
import { AnimatedPulseCircle } from "../../components/Pulse"

export const Logout = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<Text style={styles.text1}>SSID</Text>
					<Text style={styles.text2}>{INFOS.ssid}</Text>
					<Text style={styles.text2}>Status: <>conectado</></Text>
				</View>
				<Image source={Logo} style={styles.logo} />
			</View>

			<View style={styles.powerWrapper}>
				<Text style={styles.title}>
					Tem certeza que deseja sair?
				</Text>
				<Button
					title="Sair"
					color="#1fadff"
					onPress={() => Alert.alert('Saindo...')}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	logo: {
		marginLeft: 70
	},
	header: {
		display: 'flex',
		width: '100%',
		paddingTop: 80,
		alignItems: "center",
		justifyContent: 'center',
		flexDirection: "row"
	},
	text1: {
		fontWeight: "bold",
	},
	text2: {
		fontWeight: "bold",
		fontSize: '30px'
	},
	power: {
		position: "absolute",
		top: 0,
		zIndex: 10
	},
	powerWrapper: {
		width: 200,
		marginTop: 120,
		justifyContent: "center",
		alignContent: "center",
		height: '100'
	}
})