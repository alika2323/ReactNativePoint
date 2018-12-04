import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Presentacional from './src/components/presentacion';
import Lista from './src/components/Lista';
import Inputs from './src/components/Inputs';

export default class App extends React.Component {
  state = {
    title:'Texto inicial',
    parrafo: 'Este es un parrafo'
  }

  cambiarTexto = () => {
    this.setState({title:'Nuevo texto'});
  }



  render() {
    return (

      <View style={styles.container}>
      <View >
      <Presentacional title={this.state.title} cambiarTexto={this.cambiarTexto} />
      <Presentacional title={this.state.parrafo} cambiarTexto={this.cambiarTexto} />
      <Lista/>
      <Inputs/>
      </View>  
      </View>


      );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  }
})

