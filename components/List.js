import React from 'react';
import { View, Text, Image, Switch } from 'react-native';
function List({image, brandName}) {
    
    return (
        <View style={{
            backgroundColor: "#212121",
            width: 410,
            height: 70
        }}>
            <View  style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <View style={{
                    paddingLeft: 25,
                    flex: 0.30
                }}><Image 
                source={image} 
                style={{
                    height: 40,
                    borderRadius: 10,
                    width: 100,
                    resizeMode: "center",
                    overflow: "hidden",
                    justifyContent: "center",
                    backgroundColor: "white"
                }}/>
                </View>

                <View style={{
                    flex: 0.60,
                    paddingHorizontal: 30,
                    borderRightColor: "white"
                }}><Text style={{
                    fontSize: 17,
                    color: "white",
                    textAlign: "center"
                }}>{brandName}</Text></View>

                <View style={{
                    flex: 0.30,
                    borderRightColor: "white"
                }}><Switch/>
                </View>

            </View>
            
        </View>
        
    );
}
export default List;