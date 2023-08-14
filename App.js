
import Home from './src/Telas/Home';
import Detalhes from './src/Telas/Detalhes';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();//"PIlha de tela"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Detalhe" component={Detalhes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

