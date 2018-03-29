import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../stylesheet/Style'

class WelcomeScreen extends Component {
    render() {
        return(
            <View>
                <Swiper>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>1st view</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>2nd view</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>3rd view</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}

export default WelcomeScreen;