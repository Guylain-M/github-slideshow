import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import members from './routes/groupe';


function HomeScreen({navigation}) {
  return (
    <ScrollView>
  <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Page d'accueil</Text>
    
    <View>
        {members.map(personne => (
            <React.Fragment>
                <TouchableOpacity onPress={ () => navigation.navigate('Profil', {nom: personne.name ,desc:personne.desc, image: personne.image}) }>
                    <Text style={{color:'firebrick', fontSize: 40}}>{personne.name}</Text>
                    <Text style={{}}>{personne.image}</Text>
                    
                   
                </TouchableOpacity>
            </React.Fragment>
            
        ))} 
    </View>
  </SafeAreaView>
  </ScrollView>
);
}
function ProfileScreen({route , navigation}){
  const {nom, desc} = route.params;


  return(
  <View>
      <Text style={{color:'firebrick', fontSize: 25 }}>
          {nom}

      </Text>
      <Text style={{color:'dimgray', fontStyle: 'italic', fontSize: 15 }}>
          {desc}
      </Text>
      
      <Button
          title="Page d'accueil"
          onPress={() => navigation.navigate('Accueil')} />
  </View>

  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Profil" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
    
  
const Stack = createStackNavigator();