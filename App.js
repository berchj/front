import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInForm from './components/signinform';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <MaterialCommunityIcons style={styles.icon} name="weather-cloudy" size={194}/>
        <Text style={styles.title}>Weather Zone</Text>        
      </View>
      <SignInForm style={styles.SignInForm}></SignInForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#BDE0E0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  title_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    flex: 1
  },
  title: {
    fontSize: 40,
    width: '100%',
    color: '#FFF7EC',
    fontWeight: 'bold',    
  },  
  SignInForm: {
    height: 'auto',
    flex: 1,
    width:30
  },
  icon:{
    color:"#FFF7EC",    
  }
});
