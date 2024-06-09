import { LockKey } from "phosphor-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function CardEvent({ data, ...rest }) {
	return (
		<Pressable>
			<View style={styles.wrapper}>
				<View style={styles.greyBox}>
					<LockKey color="#1fadff" size={30} weight="light" />
				</View>
				<View style={styles.dateWrapper}>
					<Text style={styles.text}>{data.date}</Text>
					<Text style={styles.span}>{data.time}</Text>
				</View>
				<View style={styles.statusWrapper}>
					<Text style={styles.statusText}>{data.status}</Text>
				</View>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 20,
		marginBottom: 20,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	greyBox: {
		backgroundColor: '#ccc',
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '50%'
	},
	text: {
		color: "#000",
		fontSize: 15,
		fontWeight: 'bold'
	},
	span: {
		color: "#8c8b8b",
		marginTop: 5,
		fontSize: 12,
	},
	dateWrapper: {
		justifyContent: 'center',
		// alignItems: 'center',
		width: 100
	},
	statusWrapper: {
		justifyContent: 'center',
		width: 140
	},
	statusText: {
		borderColor: '#68f77b',
		borderWidth: 1,
		borderRadius: 20,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	}
})