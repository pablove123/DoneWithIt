import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View,TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight , SafeAreaView, Image, Alert, Platform} from 'react-native';

export default function App() {

  const yes = () => console.log("YES"); 
  const no  = () => console.log("NO"); 
  const tap = () => Alert.prompt("My title", "Message here", (text=> console.log(text) ))
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.views}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center', 
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  },
  views: {
    backgroundColor: 'dodgerblue', 
    width: '100%',
    height: '30%' 
  }
});
