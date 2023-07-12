import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

export default function Login({navigation}) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.logoBlock}>
        <Image source={require('../assets/images/login-logo.png')}  style={{resizeMode: 'center'}} />
      </View>
      <View style={styles.contentBlock}>
        <Text style={styles.titleText}> Login </Text>
        <View style={{alignItems: 'center'}}>
          <View style={styles.inputView}>
            <Text style={styles.emailTitle}>
              Email
            </Text>
            <TextInput 
              style={styles.inputText}
              returnKeyType="next"
              placeholder='example@gmail.com' 
              placeholderTextColor='#A9A9A9'
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <Text style={styles.passwordTitle}>
              Password
            </Text>
            <TextInput placeholder='Password' placeholderTextColor='#A9A9A9' secureTextEntry={true} style={styles.inputText}/>
          </View>
          
          <TouchableOpacity style={styles.NextBtn}>
            <Text style={styles.NextBtnText}>Next</Text>
          </TouchableOpacity>

          <View style={styles.footView}>
            <Text>Don't have an account?   </Text>
            <TouchableOpacity onPress={() => navigation.replace('SignInScreen')}>
              <Text style={styles.Register}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1C27B'
  },
  logoBlock: {
    flex: 1,
    alignItems: 'center'
  },
  contentBlock: {
    flex: 2,
    backgroundColor: '#FAF0E4',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  titleText: {
    marginTop: 20, 
    marginLeft: 20,
    fontSize: 35,
    color: '#213555'
  },
  inputView: {
    justifyContent: 'center', 
    width: '92%',
    padding: 20
  },
  emailTitle: {
    fontSize: 15,
    color: '#213555',
    marginBottom: 8
  },
  passwordTitle: {
    fontSize: 15,
    color: '#213555',
    marginTop: 20,
    marginBottom: 8
  },
  inputText: {
    backgroundColor: '#e9e9e9',
    borderRadius: 25,
    padding: 20
  },
  footView: {
    flexDirection: 'row'
  },
  NextBtn: {
    width: '60%',
    backgroundColor: '#7C9070',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
  NextBtnText: {
    color: 'white',
    fontWeight: 'bold'
  },
  Register: {
    color: '#213555',
    fontWeight: 'bold'
  }
})