import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
<<<<<<< HEAD
import {View, Text} from 'react-native';


export default function RecipeInstructionScreen({navigation, route}) {
    return (
        <View>
            <Text>
                {route.params.ingredients}
                {route.params.process}
                {route.params.utensils}
            </Text>
=======
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import RecommendedBox from '../components/RecommendedBox';
import MiddleNavBar from '../components/MiddleNavBar';
import { retrieveData, storeData } from '../api/AsyncStorage';
import API from '../api';
export default function RecipeInstructionScreen() {
    return (
        <Viewstyle={{flex: 1, marginTop: 20, marginBottom: 1}}>
            <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>INGREDIENTS REQUIRED</Text></TouchableOpacity>
            //list of ingredients here
             <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>UTENSILS REQUIRED</Text></TouchableOpacity>
             //list of utensils here
             <TouchableOpacity><Text style={[styles.textStyle, styles.textBold]}>PROCESS</Text></TouchableOpacity>
             //process here
>>>>>>> e9c93d1b41fa4cdab0c0df4cb1a9dbaba99ebbd8
        </View>
    )
}
}