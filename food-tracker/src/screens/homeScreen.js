// import { StyleSheet, Text, View, Button } from 'react-native';
// import { increment, decrement } from '../redux/slices/counterSlice';
// import { useSelector, useDispatch } from 'react-redux';

// export default function Home() {
//   const count = useSelector((state) => state.counter.value);
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch()
//   return (
//     <View style={styles.container}>
//       <Text>Home screen</Text>
//       <Button
//         title='increment'
//         onPress={() => dispatch(increment())}
//       />
//       <Button
//         title='decrement'
//         onPress={() => dispatch(decrement())}
//       />
//       <Text>{count}</Text>
//       <Text>{JSON.stringify(user)}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#884A39',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DraggableGrid from 'react-native-draggable-grid';

const ShelfAndFoodGrid = () => {
  const [data, setData] = useState([
    { key: 'shelf1', label: 'Shelf 1' },
    { key: 'shelf2', label: 'Shelf 2' },
    { key: 'shelf3', label: 'Shelf 3' },
    { key: 'food1', label: 'Food Type 1' },
    { key: 'food2', label: 'Food Type 2' },
    { key: 'food3', label: 'Food Type 3' },
  ]);

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <DraggableGrid
        data={data}
        numColumns={3}
        renderItem={renderItem}
        onDragRelease={(data) => setData(data)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default ShelfAndFoodGrid;