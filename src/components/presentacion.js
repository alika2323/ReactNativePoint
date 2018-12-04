import React from 'react'
import {View, Text, StyleSheet } from 'react-native'


const Presentacional = (props) =>{
	return(
		<Text onPress={props.cambiarTexto} style={styles.texto}  >
			{props.title}
		
		</Text>
		)
}

export default Presentacional;

const styles = StyleSheet.create({
	texto:{
		marginTop:20,
		textAlign: 'center',
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 20
	}
})