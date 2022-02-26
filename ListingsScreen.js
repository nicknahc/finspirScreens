import React from "react";
import { FlatList, View, Text, Image, TouchableHighlight } from "react-native";
import Card from "./components/Card";
import { AntDesign } from '@expo/vector-icons'; 
const listings = [
    {
        id: 1,
        payout: '$46.00',
        product: "Wool Overcoat",
        imageOne: require('./assets/jacket.jpg'),
        time: "1"
    },
    {
        id: 2,
        payout: '$17.80',
        product: "Cargo Joggers",
        imageOne: require('./assets/jacket.jpg'),
        time: "5"
    },
    {
        id: 3,
        payout: '$13.80',
        product: "Bomber Jacket",
        imageOne: require('./assets/jacket.jpg'),
        time: "10"
    },
    {
        id: 4,
        payout: '$13.80',
        product: "Bomber Jacket",
        imageOne: require('./assets/jacket.jpg'),
        time: "10"
    },
    {
        id: 5,
        payout: '$13.80',
        product: "Bomber Jacket",
        imageOne: require('./assets/jacket.jpg'),
        time: "10"
    }

];
function ListingsScreen(props) {
    return (
        <View style={{
            backgroundColor: "#212121",
            flex: 1,
            bottom: 0,
            borderTopWidth: 10,
            paddingVertical: 50,
            justifyContent: "center",
            alignItems: "flex-end"
          }}>
              <Image style={{
            height: 60,
            borderRadius: 15,
            top: 10,
            width: 175,
            resizeMode: "cover",
            borderColor: "white",
            borderWidth: 3,
            alignSelf: "center"
        }}
        source={require('./assets/jacket.jpg')} />
       
        <AntDesign name="arrowleft" size={40} color="white" 
        style={{
            position: "absolute",
            top: 70,
            left: 30
        }}/>
     
        
            <Text
            style={{ 
                color: 'white',
                paddingVertical: 25,
                fontSize: 30,
                alignSelf: "center"}
            }>
                Your Payouts
            </Text>
            <FlatList style ={{
                backgroundColor: "#212121",
                bottom: 0,
                width: 410,
                alignSelf: "center"
            }}
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) =>
             <Card
             title={item.payout}
             subTitle={item.product + " was purchased from your post."} 
             time={"(" + item.time + " minutes ago)"}
             image={item.imageOne}
             />
        }
        />
        </View>

    );
}

export default ListingsScreen;

