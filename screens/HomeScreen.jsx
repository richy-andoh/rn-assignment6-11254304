import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Product from '../components/Product';

const PRODUCTS = [
  { id: '1', name: 'Reversible Angora Cardigan', price: 120, image: 'https://example.com/image1.jpg' },
  // Add more products as needed
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
        <SafeAreaView>
        <Header />

        <Product />
    </SafeAreaView>
    </ScrollView>


    // <View style={styles.container}>
    //   <FlatList
    //     data={PRODUCTS}
    //     keyExtractor={(item) => item.id}
    //     renderItem={({ item }) => (
    //       <TouchableOpacity>
    //         <View style={styles.product}>
    //           <Image source={{ uri: item.image }} style={styles.image} />
    //           <Text style={styles.name}>{item.name}</Text>
    //           <Text style={styles.price}>${item.price}</Text>
    //         </View>
    //       </TouchableOpacity>
    //     )}
    //   />
    //   <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20
  },

});
