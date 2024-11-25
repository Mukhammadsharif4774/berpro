import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '../helpers/colors';
import BurgerIcon from '../assets/icons/burger.png';
import CartIcon from '../assets/icons/cart.png';
import Logo from '../assets/icons/logo.png';

export default function Header({burger = true, cart = true}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        {burger ? (
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Image source={BurgerIcon} style={styles.drawerIcon} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>

      <Image style={styles.logo} source={Logo} />

      {cart ? (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={CartIcon} style={styles.drawerIcon} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: COLORS.main,
    alignItems: 'center',
  },
  drawerIcon: {
    width: 30,
    height: 30,
    objectFit: 'contain',
  },
  text: {
    color: COLORS.black,
    fontSize: 40,
    fontFamily: FONTS.bold,
    marginLeft: 20,
  },
  logo: {
    height: 75,
    width: Dimensions.get('window').width * 0.7,
    objectFit: 'contain',
  },
});
