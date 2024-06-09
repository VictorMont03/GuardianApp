import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { INFOS } from "../../utils/Infos"

import Logo from "../../assets/favicon.png"
import { useEffect, useState } from "react"
import { HISTORY } from "../../utils/History"
import { CardEvent } from "../../components/CardEvent"


export const Events = () => {
	const [events, setEvents] = useState([])

	const loadEvents = async () => {
		setEvents(HISTORY);
	}

	useEffect(() => {
		loadEvents()
	}, [])

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

			<View>
				<FlatList
					data={events}
					numColumns={1}
					renderItem={(item) => (
						<CardEvent data={item.item} />
					)}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						padding: 35,
						paddingBottom: 100
					}}
				/>
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
	}
})