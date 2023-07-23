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
import { auth, createUserWithEmailAndPassword } from '../firebase';
import { useDispatch } from 'react-redux';
import { loginOperation, logoutOperation } from '../redux/slices/userSlice';
import axios from 'axios';
import Config from '../../config';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({
    value: '', 
    error: '* Type your email address here', 
    format: styles.showFormat});
  const [password, setPassword] = useState({
    value: '', 
    error: ['* At least one digit', '* At least 8 characters', '* At least one lowercase letter', '* At least one uppercase letter'],
    format: [styles.showFormat, styles.showFormat, styles.showFormat, styles.showFormat]
  });
  
  function checkEmailFormat(inputEmail) {
    const emailRegex = /\S+@\S+\.\S+/
    if (inputEmail.length == 0) {
      setEmail({
        value: inputEmail, 
        error: '* Please input something!',
        format: styles.wrongFormat
      }) 
    } else if (!emailRegex.test(inputEmail)) {
      setEmail({
        value: inputEmail, 
        error: '* Ooops! Invalid email address.',
        format: styles.wrongFormat
      })
    } else {
      setEmail({
        value: inputEmail, 
        error: '* Thank you! :p',
        format: styles.correctFormat
      })
    }
  }

  function checkPasswordFormat(inputPassword) {
    const passwordRegexs = [ 
      /\d/, 
      /^.{8,}$/,
      /[a-z]/,
      /[A-Z]/
    ];

    const passwordErrorMessages = [
      // correct message
      [
        '* Already have one digit', 
        '* Already have 8 characters',
        '* Already have one lowercase letter',
        '* Already have one uppercase letter'
      ],
      // wrong message
      [
        '* At least one digit', 
        '* At least 8 characters', 
        '* At least one lowercase letter', 
        '* At least one uppercase letter'
      ] 
    ]

    errorMessage = [];
    formatList = []
    passwordRegexs.map(function(regex, i) {
      if (regex.test(inputPassword)) {
        errorMessage.push(passwordErrorMessages[0][i]);
        formatList.push(styles.correctFormat);
      } else {
        errorMessage.push(passwordErrorMessages[1][i]);
        formatList.push(styles.wrongFormat);
      }
    });

    setPassword({
      value: inputPassword,
      error: errorMessage,
      format: formatList
    });
  }

  async function handleRegisteration() {
    // createUserWithEmailAndPassword(auth, email.value, password.value)
    //   .then(async (userCredential) => {
    //     // Signed in 
    //     const googleUser = userCredential.user;
    //     dispatch(loginOperation());
    //   })
    //   .catch((error) => {
    //     dispatch(logoutOperation());
    //     if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
    //       Alert.alert('Sign Up Failed', 'Oh no! Email already in use!')
    //     } else {
    //       Alert.alert('Unknown Error', 'Please connect with developer about Error: \n' + error.message)
    //     }
    //   });
    if (JSON.stringify(email.format) != JSON.stringify(styles.correctFormat)) {
      Alert.alert('Sign Up Failed', 'Please input a valid email.')
      return;
    } 
    for (let i = 0; i < password.format.length; i++) {
      if (JSON.stringify(password.format[i]) != JSON.stringify(styles.correctFormat)) {
        Alert.alert('Sign Up Failed', 'Please input a valid password.')
        return;
      }
    }
    try {
      const dataToSend = {
        username: email.value,
        email: email.value,
        password: password.value
      }
      const backendUrl = Config.mode === 'dev' ? Config.dev.backendUrl : Config.test.backendUrl;
      const response = await axios.post(backendUrl + '/users/register', dataToSend);
      console.log('Register response: \n', response.data);
      dispatch(loginOperation({
        username: email.value,
        email: email.value,
        passwrod: password.value
      }));

    } catch (error) {
      if (error.response.data.message === 'Username already registered!') {
        Alert.alert('Sign Up Failed', 'Oh no! Username already in use!')  
      } else if (error.response.data.message === 'Email already registered!') {
        Alert.alert('Sign Up Failed', 'Oh no! Email already in use!')
      } else {
        Alert.alert('Unknown Error', 'Please connect with developer about Error: \n' 
        + 'An error happened in sending data to backend in register process:\n'
        + JSON.stringify(error.response.data));
      }
    }
    
  }

  return (

    <View style={styles.container}>
      <View style={styles.logoBlock}>
        <Image source={require('../assets/images/login-logo.png')}  style={{resizeMode: 'center'}} />
      </View>
      <View style={styles.contentBlock}>
        <Text style={styles.titleText}> Sign Up </Text>

        <View style={{alignItems: 'center'}}>
          <View style={styles.inputView}>
            <Text style={styles.emailTitle}>
              Email
            </Text>
            <TextInput
              value={email.value}
              returnKeyType="next"
              style={styles.inputText}
              placeholder='example@gmail.com' 
              placeholderTextColor='#A9A9A9'
              textContentType="emailAddress"
              keyboardType="email-address"
              onChangeText={(inputEmail) => {checkEmailFormat(inputEmail)}}
            />
            <Text style={email.format}>{email.error}</Text>
            
            <Text style={styles.passwordTitle}>
              Password
            </Text>
            <TextInput 
              value={password.value}
              style={styles.inputText}
              placeholder='Password' 
              placeholderTextColor='#A9A9A9' 
              secureTextEntry={true}
              onChangeText={(inputPassword) => {checkPasswordFormat(inputPassword)}}/>
            {password.error.map((errorMessage, i) => {
              return (
                <Text key={i} style={password.format[i]}>{errorMessage}</Text>
              )
            })}
          </View>

          <TouchableOpacity 
            style={styles.NextBtn}
            onPress={() => {handleRegisteration()}}>
              <Text style={styles.NextBtnText}>Register</Text>
          </TouchableOpacity>
          
          <View style={styles.footView}>
            <View style={{flexDirection: 'row'}}>
              <Text>Already have an account?   </Text>
              <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
                <Text style={styles.Register}>Login</Text>
              </TouchableOpacity>
            </View>
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
    marginTop: 15,
    marginBottom: 8
  },
  showFormat: {
    color: '#213555',
    paddingLeft: 10
  },
  correctFormat: {
    color: 'green',
    paddingLeft: 10
  },
  wrongFormat: {
    color: 'red',
    paddingLeft: 10
  },
  inputText: {
    backgroundColor: '#e9e9e9',
    borderRadius: 25,
    padding: 18
  },
  footView: {
    alignItems: 'center'
  },
  NextBtn: {
    width: '60%',
    backgroundColor: '#7C9070',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
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
