import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { increment, decrement } from '../redux/slices/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title='increment'
        onPress={() => dispatch(increment())}
      />
      <Button
        title='decrement'
        onPress={() => dispatch(decrement())}
      />
      <Text>{count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#884A39',
    alignItems: 'center',
    justifyContent: 'center',
  },
});