import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {globalStyles} from '../styles';
import {COLORS, FONTS} from '../helpers/colors';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import SmileIcon from '../assets/icons/smile.png';

export default function ReserveSuccess() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <ImageBackground style={globalStyles.container}>
        <Header />

        <Text style={styles.title}>Спасибо за {'\n'} резерв!</Text>

        <Image source={SmileIcon} style={styles.icon} />

        <CustomButton
          text={'НА ГЛАВНУЮ'}
          style={{position: 'absolute', bottom: 50}}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'Main',
            })
          }
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.buttonBackground,
    padding: 20,
    marginTop: 100,
    paddingVertical: 30,
  },
  icon: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
    marginTop: 30,
  },
});
