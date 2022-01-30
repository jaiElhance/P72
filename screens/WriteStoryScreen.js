import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ToastAndroid, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import db from '../config.js'
import * as firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            Title: '',
            Author: '',
            Story: ''
        }
    }

    submitStory = async()=>{
          db.collection("Story").add({
             Title: this.state.Title,
             Author: this.state.Author,
             Story: this.state.Story
           })
        this.setState({
               Title: '',
               Author: '',
               Text: '',
             })
             transactionMessage = "Story Submitted"
                ToastAndroid.show(transactionMessage, ToastAndroid.SHORT);
                Alert.alert(transactionMessage)
    }

    render(){
        return(
            <SafeAreaProvider> 
                <SafeAreaView>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 40 }}> Wily </Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Title"
                            onChangeText ={text=> this.setState({Title: text})}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Author"
                            onChangeText ={text=> this.setState({Author: text})}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Story"
                            onChangeText ={text=> this.setState({Story: text})}
                        />
                    </View>
                        <TouchableOpacity 
                            style = {styles.submitButton}
                            onPress = {this.submitStory}
                        >
                            <Text style = {styles.buttonText}> Submit </Text>
                        </TouchableOpacity>
                        </KeyboardAvoidingView>
                </SafeAreaView>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button: {
      width: 80,
      height: 40,
      backgroundColor: '#2196F3',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    inputBox: {
      width: 200,
      height: 40,
      borderWidth: 1.5,
      fontSize: 20,
      borderRightWidth: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView: {
      flexDirection: 'row',
      margin: 20,
    },
    submitButton: {
      backgroundColor: 'red',
      width: 100,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    submitButtonText: {
      padding: 5,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
  });