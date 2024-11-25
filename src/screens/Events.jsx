import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {COLORS, FONTS} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import Event1 from '../assets/events/event_1.png';
import Event2 from '../assets/events/event_2.png';
import Event3 from '../assets/events/event_3.png';
import Event4 from '../assets/events/event_4.png';
import Event5 from '../assets/events/event_5.png';
import Event6 from '../assets/events/event_6.png';
import Logo from '../assets/icons/logo.png';

const {width} = Dimensions.get('window');
export default function Events() {
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.container, {backgroundColor: COLORS.main}]}>
      <Header />

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} />
      </View>

      <ScrollView
        style={globalStyles.flex}
        contentContainerStyle={globalStyles.scroll}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'EventDetail',
              params: {image: Event1},
            })
          }>
          <Text style={styles.buttonTitle}>Кулинарный Мастер-Класс</Text>
          <Text style={styles.time}>09.02.2025</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'EventDetail',
              params: {image: Event2},
            })
          }>
          <Text style={styles.buttonTitle}>Фестиваль Морепродуктов</Text>
          <Text style={styles.time}>15.02.2024</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'EventDetail',
              params: {image: Event3},
            })
          }>
          <Text style={styles.buttonTitle}>Вечер Фирменных Коктейлей</Text>
          <Text style={styles.time}>23.02.2024</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'EventDetail',
              params: {image: Event4},
            })
          }>
          <Text style={styles.buttonTitle}>Трансляция в Прямом Эфире</Text>
          <Text style={styles.time}>30.02.2024</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'EventDetail',
              params: {image: Event5},
            })
          }>
          <Text style={styles.buttonTitle}>
            День Местной Футбольной Команды
          </Text>
          <Text style={styles.time}>05.02.2024</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'EventDetail',
              params: {image: Event6},
            })
          }>
          <Text style={styles.buttonTitle}>Футбольный Бранч</Text>
          <Text style={styles.time}>15.02.2024</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: width,
    height: 150,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: width * 0.8,
    height: 150,
    objectFit: 'contain',
  },
  main: {
    width: '100%',
    padding: 20,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    height: 80,
    backgroundColor: COLORS.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.black,
    marginTop: 30,
    position: 'relative',
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.black,
  },
  time: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.bold,
    marginTop: 10,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    position: 'absolute',
    top: '-50%',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
});
