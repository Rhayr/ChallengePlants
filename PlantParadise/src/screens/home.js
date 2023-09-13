import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../constants/styles';
import { FontAwesome } from '@expo/vector-icons';
import plants from '../data/data';
import PlantItemHorizontal from '../../components/plantItemH';
import PlantItemVertical from '../../components/plantItemV';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const navigation = useNavigation();
  const handleProfileIconClick = () => {
    navigation.navigate('Profile');
  };

  const filteredPlants = plants.filter((plant) => {
    if (selectedCategory === 'All') return true;
    return plant.category === selectedCategory;
  });

  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hi, user!</Text>
        <TouchableOpacity
          onPress={handleProfileIconClick}
          style={styles.userIconContainer}
        >
          <FontAwesome name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.subtitle}>Most popular</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            overScrollMode="never"
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
          <TouchableOpacity onPress={() => setSelectedCategory('Indoor')}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === 'Indoor' && styles.selectedCategory,
              ]}
            >
              Indoor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedCategory('Outdoor')}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === 'Outdoor' && styles.selectedCategory,
              ]}
            >
              Outdoor
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            overScrollMode="never"
            data={filteredPlants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PlantItemVertical planta={item} />}
          />
        </View>
      </View>
    </ScrollView>
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
    marginTop: 40,
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
    fontFamily: 'PoppinsBold',
  },
  subtitle: {
    fontSize: 20,
    marginLeft: 24,
    marginBottom: 16,
    marginTop: 10,
    fontFamily: 'PoppinsBold',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryText: {
    fontSize: 16,
    fontFamily: 'PoppinsRegular',
    color: 'grey',
    marginHorizontal: 24,
  },
  selectedCategory: {
    fontWeight: 'bold',
    color: 'black',
  },
});
