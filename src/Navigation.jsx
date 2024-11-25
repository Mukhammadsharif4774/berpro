import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import CloseIcon from './assets/icons/close_icon.png';
import CartIcon from './assets/icons/cart.png';
import Main from './screens/Main';
import Cart from './screens/Cart';
import CartSuccess from './screens/CartSuccess';
import Reserve from './screens/Reserve';
import ReserveSuccess from './screens/ReserveSuccess';
import Contacts from './screens/Contacts';
import Events from './screens/Events';
import EventDetail from './screens/EventDetail';
import Logo from './assets/icons/logo.png';
import Translations from './screens/Translations';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const {width, height} = Dimensions.get('window');
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={DrawerNavigator} name="DrawerNavigator" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width,
          backgroundColor: COLORS.main,
          padding: 0,
          margin: 0,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="CartSuccess" component={CartSuccess} />
      <Drawer.Screen name="Reserve" component={Reserve} />
      <Drawer.Screen name="ReserveSuccess" component={ReserveSuccess} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="Translations" component={Translations} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="EventDetail" component={EventDetail} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={CloseIcon} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Logo} />
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Main'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'Главная'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Cart'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'Корзина'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Translations'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'ТРАНСЛЯЦИИ'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Contacts'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'Контакты'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Reserve'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>
              {'Резерв столика'.toUpperCase()}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Events'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'События'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DrawerNavigator', {screen: 'Cart'})
          }>
          <Image source={CartIcon} style={styles.busket} />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height - (height / 100) * 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
    alignItems: 'center',
  },
  mainContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
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
  drawerItem: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginTop: 15,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.main,
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontSize: 30,
  },
  itemText: {
    color: COLORS.black,
    fontSize: 24,
    fontFamily: FONTS.black,
    textAlign: 'center',
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 40,
    height: 40,
  },
  header: {
    width: '100%',
    height: 120,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerLogo: {
    height: 58,
    width: width / 1.6,
  },
  busket: {
    width: 60,
    height: 60,
  },
});
