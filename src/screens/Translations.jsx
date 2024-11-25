import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {COLORS, FONTS} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';

export default function Translations() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Header />

      <View style={styles.main}>
        <View style={styles.card}>
          <View>
            <Text style={styles.time}>05.01 - 00:50</Text>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>NFL</Text>
            </View>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>San Francisco 49ers</Text>
            <Text style={styles.text}>Seattle Seahawks</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.time}>06.01 - 00:50</Text>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>MLB</Text>
            </View>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>Los Angeles Dodgers</Text>
            <Text style={styles.text}>San Francisco Giants</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.time}>07.01 - 00:50</Text>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>NHL</Text>
            </View>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>New York Rangers</Text>
            <Text style={styles.text}>Washington Capitals</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.time}>08.01 - 00:50</Text>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>NBA</Text>
            </View>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>Los Angeles Lakers</Text>
            <Text style={styles.text}>Boston Celtics</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontFamily: FONTS.black,
    fontSize: 32,
    color: COLORS.main,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '100%',
  },
  time: {
    fontFamily: FONTS.black,
    fontSize: 11,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 5,
  },
  texts: {
    marginLeft: 10,
    width: '70%',
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.black,
    marginTop: 5,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    width: 100,
  },
});
