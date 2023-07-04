import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  return (
    // <View style={styles.container}>
    //   <View style={styles.logoBlock}>
    //     <Image source={require('../assets/images/login logo.jpg')}  style={{flex: 1, resizeMode: 'cover'}} />
    //   </View>
    //   <View style={styles.contentBlock}>
    //     <View>
    //       <TextInput plackholder='Emaiil' placeholderColor='#003f5c'/>
    //       <TextInput plackholder='Password' placeholderColor='#003f5c' secureTextEntry={true}/>
    //     </View>
    //     <View>
    //       <TouchableOpacity>
    //         <Text>Forgot Password?</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity>
    //         <Text>Login</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity>
    //         <Text>Signup</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
      
      
    // </View>
    <ImageBackground source={require('../assets/images/login-logo.jpg')} style={{width: '100%', height: '100%'}}>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9BCDD2'
  },
  logoBlock: {
    flex: 1,
    width: '100%'
  },
  contentBlock: {
    flex: 2,
    backgroundColor: '#FAF0E4',
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white'
  }
});