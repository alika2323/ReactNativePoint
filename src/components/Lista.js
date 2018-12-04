import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class Lista extends Component {
	state = {
		nombres: [
		{
			id:0, 
			name: 'Ben'
		},
		{
			id:1, 
			name: 'Maria'
		},
		{
			id:2, 
			name: 'Joaquin'
		},
		{
			id:3, 
			name: 'Alison'
		}
		]
	}

	alertNombre = (item) => {
		alert(item.name);
	}

	render(){
		return(
			<View>
			{
				this.state.nombres.map((item,index)=>(
					<TouchableOpacity key = {item.id} onPress = {() => this.alertNombre(item)}>
					<Text>{item.name}</Text>
					</TouchableOpacity>
				))
			}
			</View>

			
			)
	}


}