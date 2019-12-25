import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import bannerImage from '../../../../images/temp/banner.jpg';

const { width } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, textContainerStyle, textStyle, imageContainerStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={textContainerStyle}>
                    <Text style={textStyle}>SPRING COLLECTION</Text>
                </View>
                <View style={imageContainerStyle}>
                    <Image source={bannerImage} style={imageStyle} />
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingTop: 0,
        padding: 10,
    },
    textContainerStyle: {
        height: 50,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageContainerStyle: {
        flex: 4,
        justifyContent: 'center'
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight,
    }
});
