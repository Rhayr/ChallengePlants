import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import plants from '../data/data';
import PlantItemHorizontal from '../../components/plantItemH';
import PlantItemVertical from '../../components/plantItemV';

function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text> Hi, User </Text>
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
        <View>
          <FlatList
            data={plants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PlantItemVertical planta={item} />}
          />
          <View />
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
    //alignItems: 'center',
    // justifyContent: 'center',
  },
});
