import { Alert, Button, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { INFOS } from "../../utils/Infos"

import Logo from "../../assets/favicon.png"
import EyeAlarm from "../../assets/eye-alarm.png"
import { AnimatedPulseCircle } from "../../components/Pulse"
import { Info, Power } from "phosphor-react-native"
import { useState } from "react"

export const Login = () => {
	const [ssid, setSSID] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useState('');

	const [modalVisible, setModalVisible] = useState(false);
	const [inputInfo, setInputInfo] = useState("Informações")

	return (
		<View style={styles.container}>
			<View style={styles.logoWrapper}>
				<Image source={Logo} />
				<Text style={styles.logoText}>Por favor, preencha os campos a seguir para prosseguir com a conexão</Text>
			</View>

			<View style={styles.form}>
				<View style={styles.inputWrapper}>
					<View style={styles.formLabel}>
						<Text style={styles.formInput}>SSID</Text>
						<Pressable
							style={[styles.button, styles.buttonOpen]}
							onPress={() => {
								setModalVisible(true);
								setInputInfo("SSID trata-se do nome da sua rede wifi, este nome aparece nas configurações do seu celular ao conectar-se a rede.")
							}}>
							<Info color="#1fadff" weight="light" size={20} />
						</Pressable>
					</View>
					<TextInput
						style={styles.input}
						onChangeText={setSSID}
						value={ssid}
						placeholder="Digite aqui..."
					/>

				</View>

				<View style={styles.inputWrapper}>
					<View style={styles.formLabel}>
						<Text style={styles.formInput}>Senha WiFi</Text>
						<Pressable
							style={[styles.button, styles.buttonOpen]}
							onPress={() => {
								setModalVisible(true);
								setInputInfo("Senha da sua rede wifi, a mesma senha que você utiliza para se conectar através de aparelhos como celular, notebook, etc.")
							}}>
							<Info color="#1fadff" weight="light" size={20} />
						</Pressable>
					</View>
					<TextInput
						style={styles.input}
						onChangeText={setPassword}
						value={password}
						placeholder="Digite aqui..."
					/>
				</View>

				<View style={styles.inputWrapper}>
					<View style={styles.formLabel}>
						<Text style={styles.formInput}>Token (Telegram)</Text>
						<Pressable
							style={[styles.button, styles.buttonOpen]}
							onPress={() => {
								setModalVisible(true);
								setInputInfo("Digite aqui o token do telegram, o qual pode ser obtido pesquisando por @BotFather, após isso envio o comando /newbot depois escolha o username para o , após a criação um token será disponibilizado seguido do nome de HTTP_APP.")
							}}>
							<Info color="#1fadff" weight="light" size={20} />
						</Pressable>
					</View>
					<TextInput
						style={styles.input}
						onChangeText={setToken}
						value={token}
						placeholder="Digite aqui..."
					/>
				</View>

				<Button
					title="Enviar"
					onPress={() => Alert.alert('Simple Button pressed')}
				/>
			</View>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>{inputInfo}</Text>
						<Pressable
							style={styles.closeModal}
							onPress={() => setModalVisible(!modalVisible)}>
							<Text style={styles.textStyle}>Entendi!</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

	},

	logoWrapper: {
		paddingTop: 80,
		alignItems: 'center',
		width: '100%',
		paddingRight: 30,
		paddingLeft: 30
	},
	logoText: {
		textAlign: 'center',
		marginTop: 30
	},
	form: {
		marginTop: 70,
		width: '100%',
		paddingRight: 40,
		paddingLeft: 40
	},
	formInput: {
		fontSize: '20px',
		color: '#1fadff'
	},
	formLabel: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		paddingLeft: 5
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		textAlign: 'center',
	},
	closeModal: {
		backgroundColor: '#1fadff',
		padding: 15,
		borderRadius: 20,
		marginTop: 20
	},
	input: {
		borderWidth: 1,
		borderColor: '#1fadff',
		padding: 15,
		borderRadius: 20,
		marginTop: 6
	},
	inputWrapper: {
		marginBottom: 30
	}
})