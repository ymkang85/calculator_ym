import { StyleSheet } from 'react-native';
import { myColor } from './Colors';

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColor.blue,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColor.dark,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColor.light,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColor.gray,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    smallTextLight: {
        fontSize: 32,
        color: myColor.white
    },
    smallTextDark: {
        fontSize: 32,
        color: myColor.black
    },
    //keyboard setting
    row: {
        maxWidth: '100%',
        flexDirection: 'row'
    },
    viewBottom: {
        position: 'absolute',
        bottom: 80
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColor.gray,
        fontWeight: "200",
        alignSelf: "flex-end"
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColor.gray,
        fontWeight: "200",
        alignSelf: "flex-end"
    }
});