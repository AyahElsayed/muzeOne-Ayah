import React from 'react';
import { StyleSheet, View, Image, Text, Button, TextInput, Pressable } from 'react-native';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height; //689
const DeviceHeightRatio = screenHeight / 812

const Login = () => {

  return (
    <View style={styles.loginContainer}>
      {/* logo */}
      <View style={styles.imgContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
      {/* content */}
      <View style={styles.content}>
        <View style={{ marginBottom: DeviceHeightRatio * 140 }}>
          {/* login info */}
          <View style={styles.loginInfoContainer}>
            <Text style={styles.loginInfo}>
              Log into your account!
            </Text>
          </View>
          {/* login form */}
          <View style={styles.loginFormContainer}>
            <View style={styles.loginForm}>
              <Text style={styles.loginFormLabel}>+966</Text>
              <TextInput style={styles.loginFormInput} placeholder="Phone Number" />
            </View>
            <Pressable style={styles.loginFormButton}>
              <Text style={styles.buttonTitle}>Login</Text>
            </Pressable>
            {/* create account */}
          </View>
        </View>
        <View style={styles.createAccountBtnContainer}>
          <Pressable style={styles.createAccountBtn}>
            <Text style={styles.createAccountTitle}>create account </Text>
          </Pressable>
        </View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 110.38 * DeviceHeightRatio,
    marginBottom: 70 * DeviceHeightRatio,
  },
  loginInfoContainer: {
    marginBottom: 30 * DeviceHeightRatio,
  },
  content: {
    // height: '100%',
    // flex: 1,
  },
  loginInfo: {
    fontSize: 30,
    lineHeight: 40,
    letterSpacing: -0.03,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#292D32',
  },
  loginForm: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderColor: '#C49380',
    borderWidth: 1,
    borderRadius: 16,
    height: 67 * DeviceHeightRatio,
    marginBottom: 25 * DeviceHeightRatio,
  },
  loginFormLabel: {
    marginRight: 21,
    marginLeft: 14,
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 24,
    color: '#292D32',
  },
  loginFormInput: {
    fontSize: 16,
    color: '#8890A0',
  },
  loginFormButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 59 * DeviceHeightRatio,
    borderRadius: 16,
    backgroundColor: '#AEBFBE',
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    letterSpacing: 0.25,
    color: 'white',
  },
  createAccountBtnContainer: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: 0,
    marginBottom: 31 * DeviceHeightRatio,
  },
  createAccountBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 59 * DeviceHeightRatio,
    borderRadius: 16,
    borderColor: '#C49380',
    borderWidth: 1,
  },
  createAccountTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    letterSpacing: 0.25,
    color: '#C49380',
  },
  loginContainer: {
    height: '100%'
  }
});
export default Login;
