import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function Welcome() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
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