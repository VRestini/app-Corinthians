import React from "react"
import {View, Text, Button, Image} from "react-native"
import { TextInput} from "react-native-gesture-handler"
import { useState } from "react/cjs/react.development";



import estilo from "../../style/estilo"


export default function Home({navigation}){
    const [nome, SetNome, senha, SetSenha] = useState('');
    const Detalhes = ()=>{//vira funcao
        navigation.navigate('Detalhe', {nome}, {senha});
    } 
    return(
        <View style ={estilo.pagInicial}>
            <Image
                source ={require('../../assets/timao.png')}
                style = {{width: 201.4 , height: 244, marginBottom: 50}}
            />
            
            <TextInput  
                placeholder="Digite seu nome:" 
                value = {nome} 
                onChangeText={SetNome}
                style={estilo.po}
            />
             <TextInput  
                placeholder="Digite sua senha:" 
                value = {senha} 
                onChangeText={SetSenha}
                style={estilo.po}
            />
            
            <Button 
                title="Ir para a tela de detalhes" 
                onPress={Detalhes}
                style={estilo.botTela}
            />
            
        </View>

    )
}