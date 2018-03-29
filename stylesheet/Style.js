import { StyleSheet, Dimensions, Image } from 'react-native';

const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 5;

export default StyleSheet.create({
   logo: {
       height: IMAGE_HEIGHT,
       resizeMode: 'contain',
       alignSelf: 'center',
       marginBottom: 30,
       marginTop: 30
   },
   viewContainer: {
       margin: 10
   },
   text: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'normal',
        margin: 20
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#004d40'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#01579b'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff4d40'
    },
    textContainer: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    buttonContainer: {
        marginTop: 30
    },
});
