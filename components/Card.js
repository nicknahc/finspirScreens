import React from 'react';
import { View, Text, Image, Touchable, TouchableHighlightComponent, TouchableHighlight } from 'react-native';

function Card({title, subTitle, image, time}) {
    return (
        <View style={{
            alignSelf: "center",
            backgroundColor: "#212121",
            justifyContent: "space-around",
            alignContent: "flex-start",
            width: 410,
            height: 150
        }}>
            <View  style={{
                flexDirection: "row",
                borderTopColor: "white",
                borderTopWidth: 1,
                alignItems: "center",
                paddingVertical: 10
            }}> 
                <View style={{
                    flex: 0.67,
                    paddingHorizontal: 10, 
                    borderRightColor: "white"
                }}><Text style={{
                    fontSize: 20,
                    color: "white",
                    alignSelf: "center"
                }}>{title}</Text></View>

                <View  style={{
                    flex: 1,
                    paddingHorizontal: 5
                }}>
                <Text style={{
                    color: "white",
                    textAlign: "left"
                }}>
                    {subTitle} <Text style={{
                        color: "gray"
                    }}>{time}</Text></Text>
                </View>
                
                <View style={{
                    flex: 0.6
                }}><Image 
                source={image} 
                style={{
                    height: 130,
                    borderRadius: 15,
                    width: 75,
                    resizeMode: "cover",
                    overflow: "hidden",
                    borderColor: "white",
                    borderWidth: 3,
                    justifyContent: "center"
                }}/>
                </View>
            </View>
            
        </View>
        
    );
}
export default Card;