import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { auth, onAuthStateChanged } from './firebase';
import { useDispatch, useSelector } from 'react-redux';

import AuthNavigation from './navigation/authNavigation'
import HomeNavigation from './navigation/homeNavigation'

export default function RootNavigation() {

    // const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    // useEffect(() => {
    //     const redirect = onAuthStateChanged(auth, (googleUser) => {
    //         if (user.isLogin) {
    //             console.log('sign in')
    //             console.log(user);
    //         } else {
    //             console.log('sign out');
    //         }
    //     })
    // }, [user]);

    return (
        <NavigationContainer>
            {user.isLogin ? (<HomeNavigation/>) : (<AuthNavigation/>)}
        </NavigationContainer>
    )
};