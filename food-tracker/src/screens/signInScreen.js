import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image
} from 'react-native';
import { auth, createUserWithEmailAndPassword } from '../firebase'
import { useSelector, useDispatch } from 'react-redux';

export default function SignIn({navigation}) {
  const count = useSelector((state) => state.counter.value);
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
      password: inputPassword,
      error: errorMessage,
      format: formatList
    });
  }

  function handleRegisteration() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
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
                <Text style={password.format[i]}>{errorMessage}</Text>
              )
            })}
          </View>

          <TouchableOpacity style={styles.NextBtn}>
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