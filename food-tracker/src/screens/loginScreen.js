import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Alert 
} from 'react-native';
import { useDispatch } from 'react-redux';
import { loginOperation, logoutOperation } from '../redux/slices/userSlice';
import { auth, signInWithEmailAndPassword } from '../firebase';
import axios from 'axios';
import Config from '../../config';


export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  async function handleLogin() {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Login Failed', 'Please input a valid email.');
      return;
    }
    const passwordRegexs = [ 
      /\d/, 
      /^.{8,}$/,
      /[a-z]/,
      /[A-Z]/
    ]
    for (let i = 0; i < passwordRegexs.length; i++) {
      if (!passwordRegexs[i].test(password)) {
        Alert.alert('Login Failed', 'Please input a valid password.');
        return;
      }
    }

    try {
      const dataToSend = {
        email: email,
        password: password
      }
      const backendUrl = Config.mode == 'dev' ? Config.dev.backendUrl : Config.test.backendUrl;
      const response = await axios.post(backendUrl + '/users/login', dataToSend);
      console.log(JSON.stringify(response.data));
      dispatch(loginOperation({
        username: response.data.username,
        email: response.data.emial,
        password: response.data.password
      }));
    } catch (error) {
      if (error.response.data.message === 'email not found') {
        Alert.alert('Login Failed', 'Sry! Email is not found.T^T');
      } else if (error.response.data.message === 'Wrong password'){
        Alert.alert('Login Failed', 'Your password is incorrect.T^T')  
      } else {
        Alert.alert('Unknown Error', 'Please connect with developer about Error: \n' 
        + 'An error happened in sending data to backend in register process:\n'
        + JSON.stringify(error.response.data));
      }
    }

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     let googleUser = userCredential.user;
    //     dispatch(loginOperation());
    //   })
    //   .catch((error) => {
    //     dispatch(logoutOperation());
    //     if (error.message == 'Firebase: Error (auth/user-not-found).') {
    //       Alert.alert('User Not Found!', 'Sorry, we can\'t find an account with this email address. Please try again or create a new account.');
    //     }
    //     else if (error.message == 'Firebase: Error (auth/wrong-password).') {
    //       Alert.alert(
    //         'Forgotten password?', 
    //         'You can use your email to reset your password!',[
    //           {
    //             text: 'Try Again'
    //           },
    //           {
    //             text: 'Reset Password'
    //           }
    //         ]);
    //     } else {
    //       Alert.alert('Unknown Error', 'Please connect with developer about Error: \n' + error.message)
    //     }
    //   })

    
  }
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
              value={email}
              returnKeyType="next"
              style={styles.inputText}
              placeholder='example@gmail.com' 
              placeholderTextColor='#A9A9A9'
              textContentType="emailAddress"
              keyboardType="email-address"
              onChangeText={(inputEmail) => {setEmail(inputEmail)}}
            />
            <Text style={styles.passwordTitle}>
              Password
            </Text>
            <TextInput 
              value={password}
              style={styles.inputText}
              placeholder='Password' 
              placeholderTextColor='#A9A9A9' 
              secureTextEntry={true} 
              onChangeText={(inputPassword) => {setPassword(inputPassword)}}/>
          </View>
          
          <TouchableOpacity 
            style={styles.NextBtn}
            onPress={() => {handleLogin()}}>
            <Text style={styles.NextBtnText}>Let's go</Text>
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