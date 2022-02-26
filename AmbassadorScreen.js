import React from "react";
import { FlatList, View, Text} from "react-native";
import List from "./components/List";
const brands = [
    {
        id: 1,
        brandName: 'booHoo',
        logo: require('./assets/boohoo.png'),
    },
    {
        id: 2,
        brandName: 'Princess Polly',
        logo: require('./assets/princessPolly.png')
    },
    {
        id: 3,
        brandName: 'Lululemon',
        logo: require('./assets/lululemon.png')
    },
    {
        id: 4,
        brandName: 'Aelfric Eden',
        logo: require('./assets/aelfricEden.jpg'),
    },
    {
        id: 5,
        brandName: 'Fashion Nova',
        logo: require('./assets/fashionNova.png'),
    }

];
function AmbassadorScreen(props) {
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
                <Text style = {{
                position: "absolute",
                top: 50,
                left: 30,
                color: 'white',
                paddingTop: 10,
                fontSize: 20
            }}>
                Cancel
                </Text>
            
                <Text style = {{
                position: "absolute",
                top: 50,
                right: 30,
                color: 'white',
                paddingTop: 10,
                fontSize: 20
                }}>
                Apply
                </Text>
        
                <View
                style={{ 
                    borderBottomColor: "white",
                    borderWidth: 1,
                    paddingTop: 45}
                }/>


                <FlatList style ={{
                    borderTopColor: 'white',
                    borderTopWidth: 1,
                    backgroundColor: "#212121",
                    bottom: 0,
                    width: 410,
                    alignSelf: "center",
                    paddingTop: 20
                }}
                data={brands}
                keyExtractor={brands => brands.id.toString()}
                renderItem={({item}) =>
                <List
                brandName={item.brandName}
                image={item.logo}
                />
        }
        />
        </View>

    );
}

export default AmbassadorScreen;

