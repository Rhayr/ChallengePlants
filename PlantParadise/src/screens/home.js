import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { FontAwesome } from '@expo/vector-icons';
import plants from '../data/data';
import PlantItemHorizontal from '../../components/plantItemH';
import PlantItemVertical from '../../components/plantItemV';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPlants = plants.filter((plant) => {
    if (selectedCategory === 'All') return true;
    return plant.categoria === selectedCategory;
  });
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hi, John</Text>
        <View style={styles.userIconContainer}>
          <FontAwesome name="user" size={24} color="black" />
        </View>
      </View>
      <View>
        <Text style={styles.subtitle}>Most popular</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            horizontal
            data={plants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PlantItemHorizontal planta={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={() => setSelectedCategory('All')}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === 'All' && styles.selectedCategory,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedCategory('indoor')}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === 'indoor' && styles.selectedCategory,
              ]}
            >
              Indoor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedCategory('outdoor')}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === 'outdoor' && styles.selectedCategory,
              ]}
            >
              Outdoor
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={filteredPlants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PlantItemVertical planta={item} />}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primaryBackground,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 60,
    justifyContent: 'space-between',
  },
  userIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 20,
    marginLeft: 24,
    marginBottom: 16,
    marginTop: 30,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryText: {
    fontSize: 16,
    color: 'grey',
    marginHorizontal: 24,
  },
  selectedCategory: {
    fontWeight: 'bold',
    color: 'black',
  },
});
