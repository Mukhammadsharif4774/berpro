import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {globalStyles} from '../styles';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../assets/icons/back_icon.png';

export default function EventDetail({route}) {
  const navigation = useNavigation();
  const {image} = route.params;
  return (
    <View style={globalStyles.container}>
      <ImageBackground style={globalStyles.container} source={image}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DrawerNavigator', {screen: 'Events'})
          }>
          <Image source={BackIcon} style={styles.backIcon}></Image>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    width: 30,
    height: 30,
    margin: 30,
  },
});
