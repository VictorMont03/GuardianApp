import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { INFOS } from "../../utils/Infos"

import Logo from "../../assets/favicon.png"
import { AnimatedPulseCircle } from "../../components/Pulse"
import { Power } from "phosphor-react-native"
import { useState } from "react"

export const Home = () => {
	const [status, setStatus] = useState(false)
	const onPress = () => {
		setStatus(!status)
	}
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
				<TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
					<Power color={status ? "#1fadff" : '#fa6470'} />
				</TouchableOpacity>
				<AnimatedPulseCircle pulseColor={status ? "#1fadff" : '#fa6470'} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
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
		position: "relative",
		marginTop: 80,
		justifyContent: "center",
		alignContent: "center",
		flexDirection: 'row'
	},
	appButtonContainer: {
		elevation: 8,
		backgroundColor: "#fff",
		borderRadius: '50%',
		paddingVertical: 10,
		paddingHorizontal: 12,
		position: 'absolute',
		top: 160,
		height: 80,
		width: 80,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 100
	},
	appButtonText: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase"
	}
})