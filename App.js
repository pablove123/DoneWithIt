import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight , SafeAreaView, Image } from 'react-native';

export default function App() {

  const handlePress = () => console.log("text pressed"); 
  const tap = () => console.log(" its pressed")
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Open up App.js to start working on your app! </Text>
      <TouchableHighlight onPress={tap}>
        <Image
        source={{
        width: 200, 
        height: 300,
        uri: 'https://picsum.photos/200/300'}} />
      </TouchableHighlight>
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
