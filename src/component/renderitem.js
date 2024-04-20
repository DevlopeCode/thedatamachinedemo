import React, {  } from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window')
const heavyComputation = (item) => {
    const start = performance.now();
    const computedValue = {
      title: `${item.title.toUpperCase()}`,
      id: `${Number(item.id)}`
    };
    const end = performance.now();
    return computedValue;
  };
  
 export const Post = React.memo(({ item, onSelect }) => {
    const details = React.useMemo(() => heavyComputation(item), [item]);
    console.log('Rendering post:', item.id);
  
    return (
      <TouchableOpacity onPress={() => onSelect(item.id)} style={styles.item}>
        <Text style={styles.title}>Id : {details.id}</Text>
        <Text style={styles.title}>Title {details.title}</Text>
      </TouchableOpacity>
    );
  });
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
    },
    item: {
      padding: 20,
      width: '45%',
      backgroundColor: 'white',
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
      marginHorizontal: 10
    },
    title: {
      fontSize: 15,
      marginVertical: 10,
      textAlign: 'center'
    },
    details: {
      padding: 20,
      marginTop: 20,
      backgroundColor: '#eeeeee',
      height: height / 5
    }
  });
  