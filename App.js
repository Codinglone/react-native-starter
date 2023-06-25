import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Top from './components/Top';

export default function App() {
  return (
    <View style={styles.container}>
      <Top />
      <Text style={styles.text}>Sample React Native</Text>
      <TextInput defaultValue='E-mail' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'teal',
  }
});
