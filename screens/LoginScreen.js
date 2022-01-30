import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';

export default class LoginScreen extends React.Component {
constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  login=async(email,password)=>{
    try{
      const response = await firebase.auth().signInWithEmailAndPassword(email,password)
      if(response){
        this.porps.navigation.navigate('Transaction')
      }
    }
    catch(error){
      switch(error.code){
        case 'auth/user-not-found':
        Alert.alert("User Doesn't Exist")
        console.log("Doesn't Exist")

        break; 
        case 'auth/invalid-email':
        Alert.alert("Incorrect Email or Password")
        console.log("Invalid")
      }
    }
  }

  render(){
    return(
      <View>
        <Text> Login Screen </Text>
      <KeyboardAvoidingView style = {{alignItems:'center, marginTop:20'}}>
      <Text style ={{textAlign: 'center', fontSize: 30}}> Stories </Text>


      <View>
      <TextInput
      style={styles.loginBox}
      placeholder="abc@example.com"
      keyboardType = 'email-address'
      onChangeText={(text)=> {
      this.setState({
        emailId: text
      })
     }}
    />

      <TextInput
      style={styles.loginBox}
      secureTextEntry = {true}
      placeholder="Enter Password"
      onChangeText={(text)=> {
      this.setState({
        password: text
      })
     }}
    />
      </View>
      <View>
        <TouchableOpacity style = {{height:30, width: 30, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 5 }}
        onPress={()=>{this.Login(this.state.emailId, this.state.password)}}>
        <Text style = {{textAlign: "center"}}> Login </Text>
        </TouchableOpacity>

</View>
  </KeyboardAvoidingView>
  </View>

    )
  }
}

const styles = StyleSheet.create({
  loginBox: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10
  }
})