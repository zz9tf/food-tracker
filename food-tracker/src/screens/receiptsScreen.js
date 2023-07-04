import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Receipts() {
  return (
    <View style={styles.container}>
      <Text>Receipts screen</Text>
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