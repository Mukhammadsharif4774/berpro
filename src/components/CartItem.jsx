import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from './GlobalContext';
import {COLORS, FONTS} from '../helpers/colors';
import TrashIcon from '../assets/icons/trash_icon.png';
import {allProducts} from '../products/data';
export default function CartItem({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [carts, setCarts] = useState([]);

  const increment = async () => {
    if (carts?.length) {
      const updatedCarts = carts.map(product => {
        if (product.name === item.name) {
          return {...product, count: product.count + 1}; // Increment count
        }
        return product;
      });
      await AsyncStorage.setItem('cartList', JSON.stringify(updatedCarts));
      await setRefresh(!refresh); // Trigger refresh
    }
  };

  const decrement = async () => {
    if (carts?.length) {
      const updatedCarts = carts.map(product => {
        if (product.name === item.name && product.count > 0) {
          return {...product, count: product.count - 1}; // Decrease count
        }
        return product;
      });
      await AsyncStorage.setItem('cartList', JSON.stringify(updatedCarts));
      await setRefresh(!refresh); // Trigger refresh
    }
  };

  const deleteItem = async () => {
    if (carts?.length) {
      const newArray = carts.filter(product => product.name !== item.name);
      await setCarts(newArray);
      await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      await setRefresh(!refresh);
    }
  };

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCarts(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  return (
    <View style={styles.container}>
      <Image
        source={allProducts.find(p => p.name === item?.name).image}
        style={styles.image}
      />

      <View style={{width: '65%'}}>
        <View>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.description}>{item?.description}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.currencyText}>{item?.price} $</Text>
          <View style={styles.countContainer}>
            <TouchableOpacity
              style={styles.actionContainer}
              onPress={() => {
                if (
                  carts.find(product => product.name === item.name).count > 1
                ) {
                  decrement();
                } else {
                  deleteItem();
                }
              }}>
              <Text style={styles.increment}>-</Text>
            </TouchableOpacity>

            <Text style={styles.count}>
              {carts.find(product => product.name === item.name)?.count}{' '}
            </Text>

            <TouchableOpacity
              style={styles.actionContainer}
              onPress={() => increment()}>
              <Text style={styles.increment}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.delete} onPress={() => deleteItem()}>
            <Image source={TrashIcon} style={styles.delete} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    position: 'relative',
    height: 110,
    marginTop: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currencyText: {
    fontFamily: FONTS.bold,
    color: COLORS.buttonBackground,
    fontSize: 17,
    marginLeft: 8,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 12,
  },
  title: {
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    marginLeft: 8,
    width: Dimensions.get('window').width * 0.5,
  },
  description: {
    fontSize: 13,
    fontFamily: FONTS.thin,
    color: COLORS.black,
    marginLeft: 8,
    width: Dimensions.get('window').width * 0.5,
  },
  count: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  countContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: COLORS.main,
    backgroundColor: COLORS.main,
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  increment: {
    fontSize: 17,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: 20,
    textAlign: 'center',
  },
  delete: {
    width: 20,
    height: 22,
    zIndex: 110,
    objectFit: 'contain',
  },
  image: {
    width: Dimensions.get('window').width * 0.35,
    height: 110,
    objectFit: 'contain',
  },
});
