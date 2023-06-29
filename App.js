import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View,TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight , SafeAreaView, Image } from 'react-native';

export default function App() {

  const handlePress = () => console.log("text pressed"); 
  const tap = () => alert('ALERT')
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      title='Click me' 
      color="blue"
      onPress={tap}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center', 
    alignItems: 'center'
  },
});
