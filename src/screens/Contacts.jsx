import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {COLORS, FONTS} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

export default function Contacts() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Header />

      <Text style={styles.title}>Контакты</Text>

      <View style={styles.main}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.black}
          placeholder={'Номер телефона'}
          editable={false}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.black}
          placeholder={'Индекс'}
          editable={false}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.black}
          placeholder={'Почта'}
          editable={false}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.black}
          placeholder={'Адрес'}
          editable={false}
        />
      </View>

      <CustomButton
        text={'НА ГЛАВНУЮ'}
        style={{position: 'absolute', bottom: 50}}
        onPress={() =>
          navigation.navigate('DrawerNavigator', {
            screen: 'Main',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: FONTS.black,
    color: COLORS.black,
    padding: 30,
    textAlign: 'center',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  textInput: {
    height: 50,
    width: '95%',
    marginTop: 10,
    fontSize: 16,
    fontFamily: FONTS.regular,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: COLORS.main,
    alignSelf: 'center',
    paddingLeft: 20,
    borderRadius: 2,
  },
});
