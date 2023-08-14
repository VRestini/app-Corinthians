import React from "react"
import {View, Text, Button} from "react-native"
import Home from "./Home";

import estilo from "../../style/estilo"

export default function Detalhes({navigation, route}){
    const {nome, senha} = route.params;
   
    const Voltar = ()=>{//vira funcao
        navigation.navigate('Home')
    } 
    return(
        <View style ={estilo.pagInicial}>
            <Text style={estilo.sla} > Olá, {nome}</Text>
            <Text>aa {senha}</Text>
            <Button title="Ir para a tela inicial" onPress={Voltar}/>
        </View>

    )
}