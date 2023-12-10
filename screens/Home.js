// Importa o módulo React e o componente Component da biblioteca "react".
import React, {Component} from "react";
// Importa os componentes Text e View da biblioteca "react-native".
import {Text, View} from "react-native";
// Declara e exporta a classe HomeScreen que estende a classe Component do React.
export default class HomeScreen extends Component{
      // Define o método de renderização para este componente.
      render(){
         // Retorna a estrutura JSX que representa a interface do usuário.
         return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Tela inicial</Text>
            </View>
        )
    }
}