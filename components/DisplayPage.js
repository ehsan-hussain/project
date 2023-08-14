import React from 'react';
import { View, FlatList, StyleSheet, Text,StatusBar, Button} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    price: 99.99,
    brand: 'Nike',
    type: 'Running',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    price: 149.99,
    brand: 'Adidas',
    type: 'Basketball',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    price: 79.99,
    brand: 'Puma',
    type: 'Casual',
  },
  {  id: '58694a0f-3da1-471f-bd96-145571e29d75',
  title: 'Fourth Item',
  price: 29.99,
  brand: 'Reebok',
  type: 'Football',

  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});



export default function DisplayPage() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Brand: {item.brand}</Text>
            <Text>Type: {item.type}</Text>
            <Button title='Redigera' onPress={()=>alert("välkommen")}></Button>
            <Button title='Radera'></Button>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const andra = ()=> {
    return(
        console.log(item.price)
    )
};