import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {COLORS, FONTS} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../components/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../components/CartItem';
import CustomButton from '../components/CustomButton';

export default function Cart() {
  const navigation = useNavigation();
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCart = async () => {
      const list = await AsyncStorage.getItem('cartList');
      if (list?.length) {
        setCart(JSON.parse(list));
      } else {
        setCart(null);
      }
    };

    getCart();
  }, [refresh]);

  useEffect(() => {
    if (cart?.length) {
      let sum = 0;
      cart.forEach(product => {
        sum += product.price * product.count;
      });

      setPrice(sum);
    }
  }, [cart, refresh]);
  return (
    <View style={globalStyles.container}>
      <ImageBackground style={globalStyles.container}>
        <Header />

        {cart && cart.length ? (
          <>
            <ScrollView
              style={globalStyles.flex}
              contentContainerStyle={styles.main}>
              {cart.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}

              <View style={[globalStyles.row, {justifyContent: 'center'}]}>
                <Text style={styles.sumTitle}>Сума к оплате:</Text>
                <Text style={styles.sum}>{price} $</Text>
              </View>
            </ScrollView>
          </>
        ) : (
          <>
            <Text style={styles.empty}>{'Корзина пуста...'.toUpperCase()}</Text>
          </>
        )}

        <CustomButton
          text={'Заказать'.toUpperCase()}
          style={{position: 'absolute', bottom: 50}}
          onPress={() => {
            if (cart && cart.length) {
              navigation.navigate('DrawerNavigator', {
                screen: 'CartSuccess',
              });
            } else {
              navigation.navigate('DrawerNavigator', {
                screen: 'Main',
              });
            }
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingBottom: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  empty: {
    textAlign: 'center',
    fontFamily: FONTS.black,
    color: COLORS.buttonBackground,
    fontSize: 36,
    marginTop: Dimensions.get('window').height * 0.1,
    paddingVertical: 30,
  },
  sumTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.buttonBackground,
    marginTop: 40,
    textAlign: 'center',
  },
  sum: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.buttonBackground,
    marginTop: 40,
    textAlign: 'center',
    marginLeft: 20,
  },
});
