import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import db from '../config'

export default class ReadStoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
          allStories: [],
          lastVisibleStory: null,
          search: '',
        }
      }

    componentDidMount = async() => {
        const stories = await db.collection('Story').limit(10).get();
        stories.docs.map((doc) => {
          this.setState({
            allStories: [],
            lastVisibleStory: doc
          })
        })
      }
    
      fetchMoreStories = async() => {
        const stories = await db.collection('Story').startAfter(this.state.lastVisibleStory).limit(10).get();
        stories.docs.map((doc) => {
          this.setState({
            allStories: [...this.state.allStories, doc.data()],
            lastVisibleStory: doc
          })
        })
      }

      searchStories = async(text) => {
        var enteredText = text.split('');
        
        if(enteredText[0].toUpperCase() === 'S' && enteredText[1].toUpperCase() === 'T' && enteredText[2].toUpperCase() === 'G'){
          var stories = await db.collection('Story').where('Title', '==', text).get();
          stories.docs.map((doc) => {
            this.setState({
              allStories: [...this.state.allStories, doc.data()],
              lastVisibleStory: doc
            })
          }) 
        } else if (enteredText[0].toUpperCase() === 'B'){
       
     var stories = await db.collection('Story').where('Author', '==', text).get();
          stories.docs.map((doc) => {
            this.setState({
              allStories: [...this.state.allStories, doc.data()],
              lastVisibleStory: doc
            })
          }) 
        }else if (enteredText[0].toUpperCase() === 'H'){
     var stories = await db.collection('Story').where('Story', '==', text).get();
          stories.docs.map((doc) => {
            console.log(doc)
            this.setState({
              allStories: [...this.state.allStories, doc.data()],
              lastVisibleStory: doc
            })
          }) 
        }
      }

    render(){
        return(
            <View style = {styles.container}>
            <View style = {styles.searchBar}>
              <TextInput style = {styles.bar}
              placeholder ='Enter Title, Author, or Story'
              onChangeText = {(text ) => (
                this.setState({
                  search: text,
                  allStories: [],
                })
              )}>
              </TextInput>
              <TouchableOpacity style = {styles.searchButton}
              onPress = {() => {
                this.searchStories(this.state.search);
              }}>
              <Text> Search </Text>
              </TouchableOpacity>
              </View>
            <FlatList
                data = {this.state.allTransactions}
                renderItem = {({item}) => (
                <View style = {{borderBottomWidth: 2}}>
                <Text> {'Title: ' + item.Title}; </Text>
                <Text> {'Author: ' + item.Author}; </Text>
                <Text> {'Story: ' + item.Story} </Text>
                 </View>
                )}
                keyExtractor = {(item,index) => index.toString()}
                onEndReached = {this.fetchMoreStories}
                onEndReachedThreshold = {1}> 
              </FlatList>
              </View>
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
    searchBar: {
  
    },
    bar: {
  
    },
    searchButton: {
  
    },
  });
  