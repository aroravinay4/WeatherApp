import React, { useState, useEffect, state } from 'react';
import { View, StyleSheet, FlatList, Text, ImageBackground, ActivityIndicator } from 'react-native';
import Header from './components/Header';
import axios from 'axios';
import ListItem from './components/ListItem';
import Colors from './constent/Colors';

const App: () => React$Node = () => {
  const [isData, isDataSet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios.get('https://samples.openweathermap.org/data/2.5/forecast?zip=122018&appid=141a4f83be1552ad3a6307403ba45006').
      then((response) => {

        isDataSet(response.data.list);
        setIsLoading(false);

      });

  }, []);

  if (isLoading) {

    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={Colors.primaryColor} />
      </View>);
  };

  return (
    <View style={styles.imageContainer}>
      <ImageBackground style={styles.backgroundImage} source={require('./assets/backgroundrain.jpg')} >
        <Header />
        <View style={styles.lisContainer}>
          <ListItem
            temp='Temperature'
            humidity='Humidity'
            wind='Wind Speed' />

          <FlatList data={isData} keyExtractor={item => item.dt} renderItem={({ item }) =>
            <ListItem
              temp={item.main.temp}
              humidity={item.main.humidity}
              wind={item.wind.speed}
            />} />

          {/* {
            isData.map((itemData) => {
              console.log(itemData)
              return (
                <View>
              
                </View>
                // <View>
                //   <FlatList data={itemData.weather} keyExtractor={item => item.id} renderItem={({ item }) =>
                //     <Text>{item.description}</Text>} />
                // </View>
              )
            })
          } */}
        </View>
      </ImageBackground>

    </View>

  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'

  },

  imageContainer: {
    width: '100%',
    height: '100%'
  },
  lisContainer: {
    padding: 15
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default App;
