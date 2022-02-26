import { StyleSheet, Text, View, Image } from 'react-native';
import ListingsScreen from './ListingsScreen';
import AmbassadorScreen from './AmbassadorScreen';
import Card from "./components/Card";
export default function App() {
  return<AmbassadorScreen 
  style ={{
    bottom: 0,
    backgroundColor: "#212121"
  }}
  />; 
  
  /*return<ListingsScreen 
  style ={{
    bottom: 0,
    backgroundColor: "#212121"
  }}
  />; */
}
